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
  PhoneCall,
  Clock,
  Sparkles,
  ChevronRight,
  Star,
  ExternalLink,
  ShieldCheck,
  Zap,
  Award,
  Users,
  Check,
  X,
  Truck,
  Tractor
} from 'lucide-react';
import {
  COMPANY_INFO,
  HOW_WE_WORK_STEPS,
  FAQS_DATA,
  ARTICLES_DATA
} from '../../data/companyData';

interface HomeViewProps {
  onNavigate: (view: PageView, insuranceType?: InsuranceType) => void;
  onOpenQuote: (insuranceType?: InsuranceType) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<InsuranceType>('auto');

  const openWhatsApp = (customMsg?: string) => {
    const text = encodeURIComponent(
      customMsg || 'Olá! Vim pelo site da Operaseg e gostaria de falar com um especialista em seguros.'
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
    }
  > = {
    auto: {
      title: 'Seguro Automóvel Individual',
      subtitle: 'Proteção sob medida para você não parar',
      tag: 'Mais Cotado',
      highlights: [
        'Cobertura total contra colisão, furto e incêndio',
        'Guincho 24 horas sem limite e socorro mecânico',
        'Danos materiais e corporais a terceiros inclusos',
        'Opção de carro reserva e chaveiro'
      ],
      perk: 'Cotação com mais de 8 seguradoras simultâneas',
      description: 'Cuidamos do seu carro de passeio, utilitário ou veículo particular com as melhores assistências 24h do mercado.'
    },
    frotas: {
      title: 'Seguro de Frotas de Veículos',
      subtitle: 'Condições comerciais a partir de 3 veículos',
      tag: 'Transporte & Empresas',
      highlights: [
        'Apólice única simplificada para automóveis, utilitários e caminhões',
        'Guincho 24h especializado para pesados e leves',
        'Cobertura ampla de RCF para terceiros e condutores',
        'Condições especiais de franquia para empresas'
      ],
      perk: 'Gestão unificada para reduzir custos operacionais',
      description: 'Proteção estruturada para empresas, transportadoras e prestadores de serviços de Ponta Grossa e região.'
    },
    'maquinas-agricolas': {
      title: 'Máquinas & Equipamentos Agrícolas',
      subtitle: 'Blindagem para tratores, colheitadeiras e implementos',
      tag: 'Agronegócio & Campo',
      highlights: [
        'Cobertura contra tombamento, colisão e acidentes de operação',
        'Incêndio, raio, explosão e queima de palhada/lavoura',
        'Roubo ou furto qualificado na fazenda ou em trânsito',
        'Atende a 100% das exigências de financiamentos rurais'
      ],
      perk: 'Válido para penhor rural e crédito bancário',
      description: 'Respaldo financeiro indispensável para o homem do campo nos Campos Gerais, protegendo os bens que movem a safra.'
    },
    residencial: {
      title: 'Seguro Residencial',
      subtitle: 'Seu lar seguro por menos de R$ 1 por dia',
      tag: 'Custo-Benefício',
      highlights: [
        'Proteção contra incêndio, queda de raio e explosão',
        'Cobertura de danos elétricos (queima de aparelhos)',
        'Assistência 24h: eletricista, encanador e chaveiro grátis',
        'Respaldo para vendavais e danos a bens'
      ],
      perk: 'Serviços emergenciais grátis para sua casa',
      description: 'Tranquilidade para casa ou apartamento com serviços úteis no dia a dia e proteção completa do seu patrimônio familiar.'
    },
    vida: {
      title: 'Seguro de Vida & Família',
      subtitle: 'Tranquilidade e benefícios aproveitados em vida',
      tag: 'Essencial',
      highlights: [
        'Indenização direta e rápida aos dependentes sem inventário',
        'Cobertura para diagnóstico de doenças graves',
        'Diárias por incapacidade temporária (ideal para autônomos)',
        'Assistência funeral individual ou familiar'
      ],
      perk: 'Resgate em vida em caso de imprevistos de saúde',
      description: 'Segurança financeira sólida para quem você ama e tranquilidade para sua carreira profissional.'
    },
    empresarial: {
      title: 'Seguro Empresarial & Comercial',
      subtitle: 'Blindagem do seu negócio e continuidade de renda',
      tag: 'Corporativo',
      highlights: [
        'Proteção de prédios, estoques e maquinários industriais',
        'Responsabilidade civil para danos a clientes e terceiros',
        'Respaldo financeiro para despesas fixas em interrupções',
        'Danos elétricos para computadores e servidores'
      ],
      perk: 'Sob medida para o porte da sua empresa',
      description: 'Para comércios, escritórios, consultórios e indústrias em Ponta Grossa operarem sem medo do amanhã.'
    },
    saude: {
      title: 'Planos de Saúde',
      subtitle: 'Consultoria para pessoa física ou empresarial',
      tag: 'Sob Consulta',
      highlights: [
        'Ampla rede credenciada de hospitais e laboratórios',
        'Planos individuais, familiares e corporativos (PME)',
        'Atendimento de urgência e emergência nacional',
        'Orientação técnica sobre carências e coberturas'
      ],
      perk: 'Atendimento sob consulta personalizada',
      description: 'Análise cuidadosa das opções de planos e operadoras para garantir o melhor cuidado para sua saúde e sua equipe.'
    },
    previdencia: {
      title: 'Previdência Privada',
      subtitle: 'Construção de patrimônio e futuro estável',
      tag: 'Sob Consulta',
      highlights: [
        'Planos PGBL e VGBL adequados ao seu perfil fiscal',
        'Planejamento sucessório seguro e eficiente',
        'Flexibilidade total de aportes mensais ou pontuais',
        'Rendimentos com gestão de gestoras conceituadas'
      ],
      perk: 'Planejamento para longo prazo e sucessão',
      description: 'Estratégias sob medida para acumulação de capital e aposentadoria com independência e respaldo.'
    }
  };

  const currentSolution = interactiveSolutions[activeTab] || interactiveSolutions.auto;

  return (
    <div id="home-view" className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION DE ALTO IMPACTO */}
      <section id="hero-section" className="relative pt-8 sm:pt-14 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Status & Badge Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-slate-900 text-white text-xs font-medium border border-slate-800 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-100">Atendimento Ativo</span>
              <span className="text-slate-400 hidden sm:inline">|</span>
              <span className="text-slate-300 hidden sm:inline">Ponta Grossa & Região dos Campos Gerais</span>
            </div>

            <a
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-red-400 hover:text-red-700 transition-colors shadow-2xs"
            >
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">{COMPANY_INFO.googleRating} no Google</span>
              <span className="text-slate-400">({COMPANY_INFO.googleReviewsCount})</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Grid Principal do Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Lado Esquerdo: Mensagem Direta e Conquistadora */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-950 tracking-tight leading-[1.1]">
                  Protegemos o que levou uma vida para construir.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                  Na <strong>Operaseg</strong>, você não fala com robôs. Analisamos seu perfil com precisão técnica, comparamos as principais seguradoras do Brasil e garantimos a apólice certa para seu veículo, frota corporativa, máquinas agrícolas, lar ou empresa.
                </p>
              </div>

              {/* Botões de Ação Direta */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  id="hero-cta-quote"
                  onClick={() => onOpenQuote(activeTab)}
                  className="inline-flex items-center justify-center gap-2.5 bg-red-700 hover:bg-red-800 text-white px-7 py-4 rounded-sm font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center"
                >
                  <Sparkles className="w-5 h-5 text-red-200" />
                  <span>Fazer Cotação Rápida</span>
                </button>

                <button
                  id="hero-cta-whatsapp"
                  onClick={() =>
                    openWhatsApp(
                      `Olá! Gostaria de conversar com um corretor da Operaseg sobre o ${currentSolution.title}.`
                    )
                  }
                  className="inline-flex items-center justify-center gap-2.5 bg-slate-950 hover:bg-slate-900 text-white px-6 py-4 rounded-sm font-semibold text-base transition-colors cursor-pointer border border-slate-800 text-center"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Conversar no WhatsApp</span>
                </button>
              </div>

              {/* Selos de Garantia Rápida */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Cotação 100% Gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Sem Pressão de Venda</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Apoio Ativo no Sinistro</span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Simulador Visual Interativo em Tempo Real */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-slate-950 text-white rounded-sm p-6 sm:p-7 border border-slate-800 shadow-2xl relative flex flex-col justify-between">
                
                {/* Cabeçalho do Card */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block">
                        Simulador Rápido de Soluções
                      </span>
                      <h3 className="text-lg font-bold font-heading text-white mt-0.5">
                        Qual proteção você procura?
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-sm bg-red-950/80 text-red-300 text-xs font-semibold border border-red-800/80">
                      {currentSolution.tag}
                    </span>
                  </div>

                  {/* Seletor Rápido de Categorias */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 pt-4">
                    <button
                      onClick={() => setActiveTab('auto')}
                      className={`p-2 rounded-sm border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        activeTab === 'auto'
                          ? 'bg-red-700 border-red-600 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <Car className="w-4 h-4" />
                      <span className="text-[10px] font-bold">Auto</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('frotas')}
                      className={`p-2 rounded-sm border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        activeTab === 'frotas'
                          ? 'bg-red-700 border-red-600 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      <span className="text-[10px] font-bold">Frotas</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('maquinas-agricolas')}
                      className={`p-2 rounded-sm border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        activeTab === 'maquinas-agricolas'
                          ? 'bg-red-700 border-red-600 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <Tractor className="w-4 h-4" />
                      <span className="text-[10px] font-bold">Agro</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('residencial')}
                      className={`p-2 rounded-sm border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        activeTab === 'residencial'
                          ? 'bg-red-700 border-red-600 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <HomeIcon className="w-4 h-4" />
                      <span className="text-[10px] font-bold">Casa</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('vida')}
                      className={`p-2 rounded-sm border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        activeTab === 'vida'
                          ? 'bg-red-700 border-red-600 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                      <span className="text-[10px] font-bold">Vida</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('empresarial')}
                      className={`p-2 rounded-sm border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        activeTab === 'empresarial'
                          ? 'bg-red-700 border-red-600 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      <span className="text-[10px] font-bold">Empresa</span>
                    </button>
                  </div>

                  {/* Informações da Opção Selecionada */}
                  <div className="pt-5 space-y-3.5">
                    <div>
                      <h4 className="font-heading font-extrabold text-white text-base sm:text-lg">
                        {currentSolution.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {currentSolution.subtitle}
                      </p>
                    </div>

                    <div className="bg-slate-900/90 rounded-sm p-3.5 border border-slate-800/90 space-y-2">
                      <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block">
                        O que você garante:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {currentSolution.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-950/40 p-2.5 rounded-sm border border-amber-900/40">
                      <Zap className="w-4 h-4 shrink-0 text-amber-400" />
                      <span>{currentSolution.perk}</span>
                    </div>
                  </div>
                </div>

                {/* Ação Imediata no Card */}
                <div className="pt-5 mt-5 border-t border-slate-800 space-y-2.5">
                  <button
                    onClick={() => onOpenQuote(activeTab)}
                    className="w-full py-3.5 bg-red-700 hover:bg-red-800 text-white rounded-sm text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Cotar {currentSolution.title.split('&')[0]} Agora</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('seguro-detalhe', activeTab)}
                    className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-sm text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Ver detalhes completos das coberturas</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BARRA DE MÉTRICAS E SOLIDEZ (TRUST BAR ÉPICA) */}
      <section id="trust-metrics-bar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm border border-slate-200 shadow-sm p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            <div className="flex items-center gap-3.5 sm:gap-4 pt-3 sm:pt-0 sm:px-3 lg:px-4 min-w-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-100 shrink-0">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-400" />
              </div>
              <div className="min-w-0">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 leading-none block">
                  5,0 ★
                </span>
                <span className="text-xs text-slate-700 font-semibold block mt-1 break-words">
                  Avaliação máxima no Google
                </span>
                <span className="text-[11px] text-slate-500 block break-words">
                  Clientes reais em Ponta Grossa
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4 pt-4 sm:pt-0 sm:px-3 lg:px-4 min-w-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-100 shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 leading-none block">
                  +6 Anos
                </span>
                <span className="text-xs text-slate-700 font-semibold block mt-1 break-words">
                  Experiência no setor
                </span>
                <span className="text-[11px] text-slate-500 block break-words">
                  Histórico ligado à MAPFRE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4 pt-4 sm:pt-0 sm:px-3 lg:px-4 min-w-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-100 shrink-0">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 leading-none block">
                  SUSEP
                </span>
                <span className="text-xs text-slate-700 font-semibold block mt-1 break-words">
                  100% Regulamentada
                </span>
                <span className="text-[11px] text-slate-500 block break-words">
                  Atuação ética e autorizada
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4 pt-4 sm:pt-0 sm:px-3 lg:px-4 min-w-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-100 shrink-0">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 leading-none block">
                  Humanizado
                </span>
                <span className="text-xs text-slate-700 font-semibold block mt-1 break-words">
                  Suporte direto no sinistro
                </span>
                <span className="text-[11px] text-slate-500 block break-words">
                  Sem falar com robôs no 0800
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BENTO GRID DE SEGUROS (Visual Moderno & Chamativo) */}
      <section id="insurances-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-2.5 py-1 rounded-sm border border-red-200 inline-block">
              Portfólio de Proteção
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              O seguro certo para cada momento da sua vida
            </h2>
            <p className="text-base text-slate-600 max-w-xl">
              Coberturas personalizadas com as maiores seguradoras do país, com análise transparente de franquias e cláusulas.
            </p>
          </div>

          <button
            onClick={() => onNavigate('seguros')}
            className="inline-flex items-center gap-2 text-sm font-bold text-red-700 hover:text-red-900 transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>Ver todas as soluções</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Auto */}
          <div className="bg-white rounded-sm p-6 border border-slate-200 shadow-xs hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-100 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <Car className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-red-50 text-red-800 border border-red-200">
                  Mais Procurado
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Seguro Automóvel
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                  Colisão, roubo, terceiros e assistência 24h completa com guincho ilimitado para seu carro ou utilitário.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Guincho 24h & Carro Reserva</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Danos materiais a terceiros</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => onOpenQuote('auto')}
                className="w-full py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Cotar Seguro Auto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'auto')}
                className="w-full py-1.5 text-slate-600 hover:text-slate-900 text-xs font-semibold text-center transition-colors"
              >
                Ver coberturas
              </button>
            </div>
          </div>

          {/* Card 2: Frotas */}
          <div className="bg-white rounded-sm p-6 border border-slate-200 shadow-xs hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-100 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-red-50 text-red-800 border border-red-200">
                  A partir de 3 veículos
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Seguro de Frotas
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                  Apólice unificada com condições especiais de franquia para veículos leves, médios, caminhões e transportadoras.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Guincho pesado & assistência nacional</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Gestão unificada com menor custo por veículo</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => onOpenQuote('frotas')}
                className="w-full py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Cotar Seguro Frota</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'frotas')}
                className="w-full py-1.5 text-slate-600 hover:text-slate-900 text-xs font-semibold text-center transition-colors"
              >
                Ver coberturas
              </button>
            </div>
          </div>

          {/* Card 3: Máquinas Agrícolas */}
          <div className="bg-white rounded-sm p-6 border border-slate-200 shadow-xs hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-100 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <Tractor className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Agronegócio & Campo
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Máquinas Agrícolas
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                  Proteção patrimonial para tratores, colheitadeiras e implementos contra acidentes operacionais, incêndio e roubo.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Cobre tombamento e queima na lavoura</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Aceito em financiamentos e crédito rural</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => onOpenQuote('maquinas-agricolas')}
                className="w-full py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Cotar Seguro Agrícola</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'maquinas-agricolas')}
                className="w-full py-1.5 text-slate-600 hover:text-slate-900 text-xs font-semibold text-center transition-colors"
              >
                Ver coberturas
              </button>
            </div>
          </div>

          {/* Card 4: Residencial */}
          <div className="bg-white rounded-sm p-6 border border-slate-200 shadow-xs hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-100 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <HomeIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700">
                  Melhor Custo
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Seguro Residencial
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                  Proteção completa para casa ou apartamento com serviços de emergência (encanador, chaveiro e eletricista) inclusos.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Danos elétricos & queima de bens</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Assistência técnica residencial</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => onOpenQuote('residencial')}
                className="w-full py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Cotar Residencial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'residencial')}
                className="w-full py-1.5 text-slate-600 hover:text-slate-900 text-xs font-semibold text-center transition-colors"
              >
                Ver coberturas
              </button>
            </div>
          </div>

          {/* Card 5: Vida */}
          <div className="bg-white rounded-sm p-6 border border-slate-200 shadow-xs hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-100 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700">
                  Família
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Vida & Família
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                  Segurança financeira sem burocracia de inventário e benefícios aproveitados em vida para autônomos e famílias.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Resgate por doenças graves</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Diárias de incapacidade temporária</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => onOpenQuote('vida')}
                className="w-full py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Cotar Seguro de Vida</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'vida')}
                className="w-full py-1.5 text-slate-600 hover:text-slate-900 text-xs font-semibold text-center transition-colors"
              >
                Ver coberturas
              </button>
            </div>
          </div>

          {/* Card 6: Empresarial */}
          <div className="bg-white rounded-sm p-6 border border-slate-200 shadow-xs hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-100 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700">
                  Corporativo
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Empresarial
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                  Blindagem patrimonial para comércios, indústrias, consultórios e prestadores de serviços de Ponta Grossa.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Cobertura de estoques & maquinários</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Responsabilidade Civil operacional</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => onOpenQuote('empresarial')}
                className="w-full py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Cotar Empresarial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('seguro-detalhe', 'empresarial')}
                className="w-full py-1.5 text-slate-600 hover:text-slate-900 text-xs font-semibold text-center transition-colors"
              >
                Ver coberturas
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. COMPARATIVO PERSUASIVO E DIRETO: OPERASEG VS. BANCO / SOZINHO */}
      <section id="comparative-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-sm p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/80 px-2.5 py-1 rounded-sm border border-red-800/80 inline-block">
              Por que contratar com corretora especializada?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              A diferença real entre fechar no banco ou ter a Operaseg ao seu lado.
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              O seguro só mostra seu verdadeiro valor na hora do imprevisto. Veja por que milhares de pessoas preferem a assessoria de uma corretora local.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Lado 1: Fechar no Banco / Sozinho na Internet */}
            <div className="bg-slate-950/70 p-6 sm:p-7 rounded-sm border border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-slate-400 pb-3 border-b border-slate-800">
                <X className="w-5 h-5 text-red-500" />
                <h3 className="font-heading font-bold text-white text-base">
                  Contratando sozinho ou no banco
                </h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5"></span>
                  <span>Pacote engessado de coberturas que você nem sabe se vai precisar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5"></span>
                  <span>Atendimento em 0800 impessoal e robôs com menus demorados.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5"></span>
                  <span>Na hora da colisão ou sinistro, você resolve tudo sozinho com a seguradora.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5"></span>
                  <span>Sem comparação de mercado: oferecem apenas o produto do próprio banco.</span>
                </li>
              </ul>
            </div>

            {/* Lado 2: Com a Operaseg Corretora */}
            <div className="bg-gradient-to-br from-red-950/50 via-slate-900 to-slate-950 p-6 sm:p-7 rounded-sm border border-red-700/60 shadow-md space-y-4 relative">
              <div className="flex items-center justify-between pb-3 border-b border-red-800/50">
                <div className="flex items-center gap-2.5 text-red-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-heading font-bold text-white text-base">
                    Com a Operaseg ao seu lado
                  </h3>
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-sm bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Vantagem Real
                </span>
              </div>
              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Estudo comparativo entre várias seguradoras para encontrar o melhor preço.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Corretor de verdade com nome, telefone e WhatsApp direto em Ponta Grossa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>No sinistro, nós acionamos a seguradora, acompanhamos o processo e defendemos você.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Explicação transparente de franquias, exclusões e limites sem juridiquês.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              Quer ver na prática como fica para o seu veículo ou patrimônio?
            </span>
            <button
              onClick={() => onOpenQuote()}
              className="py-3 px-6 bg-red-700 hover:bg-red-800 text-white rounded-sm text-xs font-bold transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Solicitar Estudo Comparativo Gratuito</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. PASSO A PASSO DIRETO EM 3 ETAPAS */}
      <section id="simple-steps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Sem Burocracia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Como funciona sua cotação na Operaseg
          </h2>
          <p className="text-base text-slate-600">
            Processo ágil, consultivo e transparente do início ao fim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-7 rounded-sm border border-slate-200 shadow-xs space-y-3 relative">
            <span className="text-3xl font-extrabold font-heading text-red-700">01</span>
            <h3 className="font-heading font-bold text-slate-900 text-lg">
              Você nos conta o que precisa
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pelo WhatsApp ou formulário, em menos de 2 minutos você informa o modelo do carro, imóvel ou negócio que quer proteger.
            </p>
          </div>

          <div className="bg-white p-7 rounded-sm border border-slate-200 shadow-xs space-y-3 relative">
            <span className="text-3xl font-extrabold font-heading text-red-700">02</span>
            <h3 className="font-heading font-bold text-slate-900 text-lg">
              Comparamos e filtramos as melhores opções
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nossa equipe técnica consulta as seguradoras líderes e seleciona as propostas com melhor custo-benefício e coberturas adequadas.
            </p>
          </div>

          <div className="bg-white p-7 rounded-sm border border-slate-200 shadow-xs space-y-3 relative">
            <span className="text-3xl font-extrabold font-heading text-red-700">03</span>
            <h3 className="font-heading font-bold text-slate-900 text-lg">
              Você escolhe com segurança e apoio
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explicamos cada cláusula sem letras miúdas. Você contrata com convicção e nosso suporte continua ativo durante todo o ano.
            </p>
          </div>

        </div>
      </section>

      {/* 6. INSTITUCIONAL RESUMIDO COM LOCALIDADE EM PONTA GROSSA */}
      <section id="about-summary-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-100 via-white to-slate-50 rounded-sm p-8 sm:p-12 border border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-2.5 py-1 rounded-sm border border-red-200 inline-block">
                  Sede no Centro de Ponta Grossa — PR
                </span>
                <span className="text-xs font-semibold text-slate-600">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
                Uma corretora de seguros de verdade, perto de você.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A <strong>Operaseg Corretora de Seguros LTDA</strong> atua no Centro de Ponta Grossa com liderança técnica experiente (+6 anos de atuação profissional ligada à MAPFRE Seguros). Acreditamos que a escolha de um seguro deve ser baseada em escuta atenta, clareza nas condições e suporte irrestrito nos momentos difíceis.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 bg-white/90 p-4 rounded-sm border border-slate-200/80">
                <div className="space-y-1">
                  <span className="font-semibold text-slate-900 block">Sócia-Administradora:</span>
                  <span className="text-slate-600">{COMPANY_INFO.founderName}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-slate-900 block">Experiência Comprovada:</span>
                  <span className="text-slate-600">{COMPANY_INFO.founderExperience}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-slate-900 block">Localização:</span>
                  <span className="text-slate-600">{COMPANY_INFO.address}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-slate-900 block">Horário de Atendimento:</span>
                  <span className="font-semibold text-slate-900">{COMPANY_INFO.businessHours}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('sobre')}
                  className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-5 py-3 rounded-sm text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Conhecer a história da Operaseg</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-slate-800 hover:bg-slate-100 border border-slate-300 px-4 py-3 rounded-sm text-xs font-semibold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-red-700" />
                  <span>Como chegar no escritório</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-sm border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-sm bg-red-700 text-white flex items-center justify-center font-heading font-extrabold text-2xl shadow-sm">
                ES
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-lg">
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
      </section>

      {/* 7. FAQ RÁPIDA (Dúvidas Mais Comuns) */}
      <section id="home-faq-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
            Perguntas frequentes antes de contratar
          </h2>
          <p className="text-sm text-slate-600">
            Respostas diretas e responsáveis sobre como funciona a consultoria da Operaseg.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS_DATA.slice(0, 4).map((faq) => (
            <div key={faq.id} className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pl-7.5">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('duvidas')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-900 transition-colors"
          >
            <span>Ver todas as perguntas e respostas sobre cotações</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 8. CTA FINAL ÉPICO */}
      <section id="final-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-sm p-8 sm:p-14 text-center space-y-6 relative overflow-hidden border border-slate-800 shadow-2xl">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-sm border border-emerald-800 inline-block">
              Consultoria Rápida e Gratuita
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Pronto para proteger o que é seu com quem realmente entende?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Fale agora com nossa equipe em Ponta Grossa. Receba seu comparativo de valores e coberturas sem compromisso.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => openWhatsApp('Olá! Gostaria de conversar com a Operaseg sobre uma cotação personalizada.')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-sm font-bold text-base shadow-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chamar no WhatsApp Oficial</span>
            </button>

            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white px-7 py-4 rounded-sm font-bold text-base transition-colors cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Solicitar Cotação Online</span>
            </button>
          </div>

          <div className="pt-4 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
            <span>Telefone: {COMPANY_INFO.phone}</span>
            <span>•</span>
            <span>Rua Benjamin Constant, 1 - Sala 3 - Centro</span>
            <span>•</span>
            <span>Atendimento Seg a Sex: 08:00 às 17:30</span>
          </div>

        </div>
      </section>

    </div>
  );
};


import React, { useState } from 'react';
import { InsuranceType, PageView } from '../../types';
import { INSURANCES_DATA, COMPANY_INFO } from '../../data/companyData';
import {
  Car,
  Home as HomeIcon,
  Heart,
  Building2,
  Activity,
  Wallet,
  Shield,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  Send,
  AlertCircle,
  ArrowLeft,
  Info,
  Check,
  Truck,
  Tractor
} from 'lucide-react';

interface InsuranceDetailViewProps {
  insuranceType: InsuranceType;
  onSelectInsurance: (type: InsuranceType) => void;
  onBackToCatalog: () => void;
  onOpenQuote: (type?: InsuranceType) => void;
}

export const InsuranceDetailView: React.FC<InsuranceDetailViewProps> = ({
  insuranceType,
  onSelectInsurance,
  onBackToCatalog,
  onOpenQuote,
}) => {
  const insurance =
    INSURANCES_DATA.find((item) => item.id === insuranceType) || INSURANCES_DATA[0];

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCity, setFormCity] = useState('Ponta Grossa');
  const [formNotes, setFormNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const getIcon = (id: InsuranceType) => {
    switch (id) {
      case 'auto':
        return <Car className="w-8 h-8" />;
      case 'frotas':
        return <Truck className="w-8 h-8" />;
      case 'maquinas-agricolas':
        return <Tractor className="w-8 h-8" />;
      case 'residencial':
        return <HomeIcon className="w-8 h-8" />;
      case 'vida':
        return <Heart className="w-8 h-8" />;
      case 'empresarial':
        return <Building2 className="w-8 h-8" />;
      case 'saude':
        return <Activity className="w-8 h-8" />;
      case 'previdencia':
        return <Wallet className="w-8 h-8" />;
      default:
        return <Shield className="w-8 h-8" />;
    }
  };

  const handleWhatsAppContextual = () => {
    const text = encodeURIComponent(insurance.whatsappMessage);
    window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const handlePageFormSubmit = (e: React.FormEvent, viaWhatsApp = false) => {
    e.preventDefault();
    if (viaWhatsApp) {
      const msg = `Olá! Meu nome é ${formName || 'Cliente'}.
Vim pela página de *${insurance.title}* no site da Operaseg em ${formCity}.
${formNotes ? `Detalhes: ${formNotes}` : ''}
${formPhone ? `Meu WhatsApp: ${formPhone}` : ''}`;
      window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    }
    setFormSubmitted(true);
  };

  return (
    <div id={`insurance-detail-${insurance.id}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Top Breadcrumb & Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <button
          onClick={onBackToCatalog}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para todas as soluções</span>
        </button>

        {/* Quick horizontal switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {INSURANCES_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectInsurance(item.id);
                setFormSubmitted(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded-sm text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                item.id === insurance.id
                  ? 'bg-red-700 text-white font-semibold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Header of the insurance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-sm bg-red-700 text-white flex items-center justify-center shadow-md">
              {getIcon(insurance.id)}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                {insurance.badge}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight mt-1">
                {insurance.title}
              </h1>
            </div>
          </div>

          <p className="text-xl font-medium text-slate-700">
            {insurance.tagline}
          </p>

          <p className="text-base text-slate-600 leading-relaxed">
            {insurance.fullDescription}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={handleWhatsAppContextual}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-sm font-bold text-sm shadow-md transition-colors cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Cotar pelo WhatsApp com mensagem pronta</span>
            </button>

            <button
              onClick={() => onOpenQuote(insurance.id)}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-sm font-semibold text-sm transition-colors cursor-pointer"
            >
              <span>Preencher formulário de cotação</span>
            </button>
          </div>
        </div>

        {/* Quick Context Card */}
        <div className="lg:col-span-4 bg-slate-50 p-6 rounded-sm border border-slate-200 space-y-4">
          <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
            <Info className="w-4 h-4 text-red-700" />
            <span>Resumo da Solução</span>
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {insurance.shortDescription}
          </p>
          <div className="p-3.5 bg-white rounded-sm border border-slate-200/90 text-xs space-y-2">
            <span className="font-semibold text-slate-900 block">Atendimento Operaseg:</span>
            <span className="text-slate-600 block">
              Consultoria independente em Ponta Grossa com suporte completo no pré e pós-venda.
            </span>
          </div>
          {insurance.status === 'a_confirmar' && (
            <div className="p-3 bg-slate-50 rounded-sm border border-slate-200 text-xs text-slate-700">
              <strong>Informação:</strong> Modalidade disponível sob consulta prévia com a equipe da Operaseg para verificação de seguradoras parceiras e planos regionais.
            </div>
          )}
        </div>
      </div>

      {/* Grid of details: Who is it for & Situations covered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Para quem é */}
        <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-xs space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Perfil Indicado
            </span>
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Para quem serve?
            </h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            {insurance.whoIsItFor.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Situações cobertas */}
        <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-xs space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Proteção Real
            </span>
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Situações que podem ser cobertas
            </h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            {insurance.situationsCovered.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Fatores que influenciam a cotação */}
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-sm border border-slate-800 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-red-400">
            Entenda o Cálculo
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            Quais fatores influenciam a cotação?
          </h3>
          <p className="text-sm text-slate-300">
            Diferente de um produto com preço fixo de prateleira, o seguro é calculado com base na probabilidade matemática e no nível de risco individual.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {insurance.factorsInfluencingPrice.map((factor, index) => (
            <div key={index} className="bg-slate-800/80 p-5 rounded-sm border border-slate-700/80 space-y-1.5">
              <span className="text-xs font-bold text-red-400">Fator 0{index + 1}</span>
              <p className="text-sm text-slate-200 leading-snug">{factor}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dúvidas Frequentes da Categoria */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Esclarecimentos Práticos
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
            Dúvidas frequentes sobre {insurance.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insurance.commonFaqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs space-y-2">
              <h4 className="font-heading font-bold text-slate-900 text-base flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Formulário de Interesse Rápido na própria página */}
      <div id="page-quick-quote-form" className="bg-white rounded-sm p-8 sm:p-12 border border-slate-200 shadow-sm">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-2.5 py-1 rounded-md border border-red-200 inline-block">
              Simulação Sem Compromisso
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              Solicitar orientação sobre {insurance.title}
            </h3>
            <p className="text-sm text-slate-600">
              Preencha os dados básicos. A Operaseg analisa o perfil e entra em contato com alternativas claras.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-sm bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-heading font-bold text-slate-900 text-lg">
                Mensagem enviada com sucesso!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Recebemos seu pedido de orientação para {insurance.title}. Nossa equipe entrará em contato em breve através do WhatsApp informado.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => handlePageFormSubmit(e, false)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(42) 99999-9999"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Cidade de Residência / Uso
                </label>
                <input
                  type="text"
                  value={formCity}
                  onChange={(e) => setFormCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  O que você gostaria de proteger ou esclarecer?
                </label>
                <textarea
                  rows={3}
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder={`Ex: Detalhes sobre ${insurance.title}, ano do bem, se já possui apólice atual ou prioridades de cobertura...`}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={(e) => handlePageFormSubmit(e, true)}
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar direto pelo WhatsApp</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4 text-red-400" />
                  <span>Solicitar por E-mail</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Mandatory Legal Warning (Prompt Section 10) */}
      <div className="p-4 rounded-sm bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <p>
          <strong>Aviso legal:</strong> As coberturas, condições, limites e exclusões variam conforme o produto, seguradora e contratação. Consulte sempre as condições da apólice. A Operaseg atua na assessoria e orientação técnica para a melhor compreensão de todas as cláusulas contratuais.
        </p>
      </div>

    </div>
  );
};

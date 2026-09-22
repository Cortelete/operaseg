import React from 'react';
import { HOW_WE_WORK_STEPS, COMPANY_INFO } from '../../data/companyData';
import { HeartHandshake, Shield, MessageCircle, PhoneCall, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { PageView } from '../../types';

interface HowWeWorkViewProps {
  onOpenQuote: () => void;
  onNavigate: (view: PageView) => void;
}

export const HowWeWorkView: React.FC<HowWeWorkViewProps> = ({ onOpenQuote, onNavigate }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent('Olá! Vim pela página "Como Trabalhamos" da Operaseg e gostaria de entender melhor.');
    window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div id="how-we-work-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Title */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-md border border-red-200 inline-block">
          Metodologia & Relacionamento
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
          Do primeiro contato ao pós-venda.
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          A contratação de um seguro não deve ser um ato burocrático e isolado. Conheça como a Operaseg conduz cada etapa para garantir segurança e transparência.
        </p>
      </div>

      {/* Deep Flow of the 6 steps */}
      <div className="space-y-6">
        {HOW_WE_WORK_STEPS.map((step, idx) => (
          <div
            key={step.step}
            id={`step-card-${step.step}`}
            className="bg-white rounded-sm p-8 sm:p-10 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            <div className="lg:col-span-2 flex items-center gap-4">
              <span className="text-4xl sm:text-5xl font-extrabold font-heading text-red-700">
                {step.step}
              </span>
              <span className="h-10 w-px bg-slate-200 hidden sm:block"></span>
            </div>

            <div className="lg:col-span-4 space-y-1">
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm font-semibold text-red-700">
                {step.subtitle}
              </p>
            </div>

            <div className="lg:col-span-6 text-sm text-slate-600 leading-relaxed">
              <p>{step.description}</p>
              {idx === 3 && (
                <div className="mt-3 p-3 rounded-sm bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <strong>Ponto alto da nossa assessoria:</strong> Nunca deixamos você no escuro sobre o que é franquia ou o que está na lista de riscos excluídos.
                </div>
              )}
              {idx === 5 && (
                <div className="mt-3 p-3 rounded-sm bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
                  <strong>O momento que mais importa:</strong> Em caso de imprevisto ou sinistro, você não precisa ficar sozinho com a seguradora; orientamos você do início ao fim da indenização.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Por que o Pós-Venda é decisivo */}
      <div className="bg-slate-950 text-white rounded-sm p-8 sm:p-14 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            A verdadeira razão de ter uma corretora
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            O que acontece se você tiver um sinistro?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Muitas pessoas contratam seguros online ou em canais impessoais e descobrem da pior maneira que, na hora do acidente ou dano patrimonial, estão por conta própria em filas de atendimento.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Com a Operaseg, você tem o contato direto de uma corretora sediada em Ponta Grossa que ajuda a registrar o boletim, organizar os documentos exigidos pela seguradora, acompanhar a vistoria e agilizar a liberação da indenização ou o reparo do bem.
          </p>
        </div>

        <div className="lg:col-span-4 bg-slate-900 p-6 rounded-sm border border-slate-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-sm bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-white text-lg">
            Atendimento Pessoal e Técnico
          </h3>
          <p className="text-xs text-slate-400">
            Tranquilidade para você se preocupar com o que realmente importa enquanto nós cuidamos dos trâmites com a seguradora.
          </p>
          <button
            onClick={openWhatsApp}
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Conversar com a Operaseg</span>
          </button>
        </div>
      </div>

    </div>
  );
};

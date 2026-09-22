import React, { useState } from 'react';
import { FAQS_DATA, COMPANY_INFO } from '../../data/companyData';
import { HelpCircle, Search, MessageCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { PageView } from '../../types';

interface FaqViewProps {
  onOpenQuote: () => void;
  onNavigate: (view: PageView) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onOpenQuote, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [expandedId, setExpandedId] = useState<string | null>('1');

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCategory =
      activeCategory === 'todas' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Olá! Vim pela página de Dúvidas da Operaseg e gostaria de fazer uma pergunta.');
    window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div id="faq-page" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Title */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-md border border-red-200 inline-block">
          Central de Dúvidas
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
          Perguntas Frequentes
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Esclarecemos com honestidade técnica as principais questões sobre cotações, franquias, apólices e o trabalho da corretora.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar por dúvida (ex: franquia, mais barato, cotação, sinistro...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-sm text-sm text-slate-900 shadow-xs focus:ring-2 focus:ring-red-600 focus:outline-hidden"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory('todas')}
            className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold transition-colors cursor-pointer ${
              activeCategory === 'todas'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Todas as dúvidas ({FAQS_DATA.length})
          </button>
          <button
            onClick={() => setActiveCategory('geral')}
            className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold transition-colors cursor-pointer ${
              activeCategory === 'geral'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Conceitos Gerais
          </button>
          <button
            onClick={() => setActiveCategory('processo')}
            className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold transition-colors cursor-pointer ${
              activeCategory === 'processo'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Cotação & Processo
          </button>
          <button
            onClick={() => setActiveCategory('auto')}
            className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold transition-colors cursor-pointer ${
              activeCategory === 'auto'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Seguro Auto
          </button>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white rounded-sm border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="font-heading font-bold text-slate-900 text-base sm:text-lg flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
                    <span>{faq.question}</span>
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="bg-slate-50 p-8 rounded-sm text-center text-slate-600 text-sm">
            Nenhuma dúvida encontrada com o termo "{searchTerm}".
          </div>
        )}
      </div>

      {/* Direct Contact reassurance box */}
      <div className="bg-slate-100 rounded-sm p-8 border border-slate-200 text-center space-y-4">
        <h3 className="text-xl font-bold font-heading text-slate-900">
          Não encontrou a resposta para a sua situação?
        </h3>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          Cada caso possui particularidades. Fale diretamente com a Operaseg e responderemos de forma rápida e clara.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-sm text-xs font-bold transition-colors cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar dúvida no WhatsApp</span>
          </button>
          <button
            onClick={() => onNavigate('contato')}
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-sm text-xs font-semibold transition-colors cursor-pointer shadow-sm"
          >
            <span>Ver página de contato</span>
          </button>
        </div>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { ARTICLES_DATA, COMPANY_INFO } from '../../data/companyData';
import { ArticleItem } from '../../types';
import { BookOpen, Clock, ArrowLeft, MessageCircle, ChevronRight, Share2, CheckCircle2 } from 'lucide-react';

interface BlogViewProps {
  onOpenQuote: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onOpenQuote }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const openWhatsAppArticle = (title: string) => {
    const text = encodeURIComponent(
      `Olá! Estava lendo o artigo "${title}" no site da Operaseg e gostaria de tirar uma dúvida sobre o assunto.`
    );
    window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div id="blog-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {selectedArticle ? (
        /* Single Article View */
        <article className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-200">
          <button
            onClick={() => {
              setSelectedArticle(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todos os artigos</span>
          </button>

          <header className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="px-2.5 py-1 rounded-md bg-red-100 text-red-900 font-semibold">
                {selectedArticle.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedArticle.readTime}
              </span>
              <span>•</span>
              <span>Operaseg Corretora</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 tracking-tight leading-tight">
              {selectedArticle.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              {selectedArticle.summary}
            </p>
          </header>

          <div className="border-t border-slate-200 pt-8 space-y-5 text-slate-700 text-base leading-relaxed">
            {selectedArticle.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Article Footer CTA */}
          <div className="mt-12 p-8 rounded-sm bg-slate-900 text-white space-y-4 border border-slate-800">
            <h3 className="text-xl font-bold font-heading text-white">
              Quer analisar sua apólice ou tirar uma dúvida sobre esse assunto?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              A Operaseg atende você em Ponta Grossa com atenção e técnica para avaliar o que mais faz sentido para a sua realidade.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openWhatsAppArticle(selectedArticle.title)}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-sm text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp sobre este artigo</span>
              </button>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-sm text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Solicitar cotação</span>
              </button>
            </div>
          </div>
        </article>
      ) : (
        /* Blog Index View */
        <>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-md border border-red-200 inline-block">
              Conteúdos Educativos & Artigos
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
              Conteúdo para ajudar você a escolher melhor
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Informação clara sobre o mercado de seguros em Ponta Grossa. Entenda regras, evite erros comuns e descubra como proteger seu patrimônio sem pagar por coberturas supérfluas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES_DATA.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  setSelectedArticle(article);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-sm p-8 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold font-heading text-slate-900 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-red-700 flex items-center gap-1">
                    <span>Ler artigo completo</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  <span className="text-xs text-slate-400">Ponta Grossa — PR</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
};

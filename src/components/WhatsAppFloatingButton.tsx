import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO, INSURANCES_DATA } from '../data/companyData';
import { PageView, InsuranceType } from '../types';

interface WhatsAppFloatingButtonProps {
  onOpenQuote?: () => void;
  currentView?: PageView;
  selectedInsurance?: InsuranceType;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  onOpenQuote,
  currentView,
  selectedInsurance,
}) => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const openWhatsApp = () => {
    let customText = 'Olá! Vim pelo site da Operaseg em Ponta Grossa e gostaria de tirar uma dúvida sobre seguros.';
    if (currentView === 'seguro-detalhe' && selectedInsurance) {
      const found = INSURANCES_DATA.find((item) => item.id === selectedInsurance);
      if (found) {
        customText = found.whatsappMessage;
      }
    }
    const message = encodeURIComponent(customText);
    window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button with preview balloon */}
      <div id="whatsapp-floating-desktop" className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end">
        {!tooltipDismissed && (
          <div className="mb-2 bg-white text-slate-800 p-3 rounded-sm shadow-xl border border-slate-200 text-xs max-w-xs animate-in slide-in-from-bottom duration-300 relative">
            <button
              onClick={() => setTooltipDismissed(true)}
              className="absolute -top-1.5 -right-1.5 bg-slate-200 text-slate-600 rounded-full p-0.5 hover:bg-slate-300"
              aria-label="Fechar balão"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="font-semibold text-slate-900 mb-0.5">Precisa de orientação rápida?</p>
            <p className="text-slate-600 text-[11px] leading-snug">
              Converse diretamente com um corretor da Operaseg no WhatsApp.
            </p>
          </div>
        )}

        <button
          onClick={openWhatsApp}
          id="btn-floating-whatsapp"
          className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-sm shadow-lg hover:shadow-emerald-600/30 transition-all duration-200 group cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
          aria-label="Abrir conversa no WhatsApp da Operaseg"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-sm pr-1">Falar com a Operaseg</span>
        </button>
      </div>

      {/* Mobile Fixed Bottom Bar (Mandatory Requirement: 20. Experiência Mobile) */}
      <div id="mobile-sticky-bottom-bar" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-xl flex items-center gap-2">
        <button
          onClick={openWhatsApp}
          id="btn-mobile-whatsapp-bar"
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-700 text-white h-12 rounded-sm font-bold text-sm shadow-md transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span>Falar no WhatsApp</span>
        </button>

        <button
          onClick={onOpenQuote}
          id="btn-mobile-quote-bar"
          className="px-3.5 h-12 rounded-sm bg-slate-900 text-white text-xs font-semibold flex items-center justify-center active:bg-slate-800"
        >
          Cotação
        </button>
      </div>
    </>
  );
};

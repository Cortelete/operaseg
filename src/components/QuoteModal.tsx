import React, { useState } from 'react';
import { X, Shield, Send, MessageCircle, CheckCircle, Info } from 'lucide-react';
import { InsuranceType } from '../types';
import { COMPANY_INFO, INSURANCES_DATA } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  initialType?: InsuranceType;
  initialInsuranceType?: InsuranceType;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, initialType, initialInsuranceType, onClose }) => {
  const effectiveInitial = initialInsuranceType || initialType || 'auto';
  const [insuranceType, setInsuranceType] = useState<string>(effectiveInitial);

  // Sync state if initial prop changes
  React.useEffect(() => {
    if (initialInsuranceType) {
      setInsuranceType(initialInsuranceType);
    } else if (initialType) {
      setInsuranceType(initialType);
    }
  }, [initialInsuranceType, initialType, isOpen]);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Ponta Grossa');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentProduct = INSURANCES_DATA.find((item) => item.id === insuranceType);

  const handleSubmit = (e: React.FormEvent, viaWhatsApp = false) => {
    e.preventDefault();

    const selectedTitle = currentProduct ? currentProduct.title : insuranceType;
    const cleanPhone = phone.replace(/\D/g, '');

    const message = `Olá! Meu nome é ${fullName || 'Cliente'}.
Gostaria de uma orientação e cotação de *${selectedTitle}* com a Operaseg em ${city || 'Ponta Grossa'}.
${details ? `Detalhes adicionais: ${details}` : ''}
${cleanPhone ? `Meu WhatsApp: ${phone}` : ''}
${email ? `Meu e-mail: ${email}` : ''}`;

    if (viaWhatsApp) {
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${encoded}`, '_blank');
      setSubmitted(true);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div
      id="quote-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="quote-modal-dialog"
        className="bg-white rounded-sm max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-200">
              <Shield className="w-5 h-5 text-red-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-900 leading-tight">
                Solicitar Cotação ou Orientação
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Operaseg Corretora de Seguros • Ponta Grossa, PR
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              Solicitação recebida com sucesso!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Obrigado pelo seu contato. A equipe da Operaseg analisará seu perfil para apresentar opções claras e compatíveis com a sua necessidade.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-slate-900 text-white rounded-sm text-sm font-semibold hover:bg-slate-800"
              >
                Concluir
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={(e) => handleSubmit(e, false)} className="mt-5 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Qual seguro você deseja cotar ou entender?
              </label>
              <select
                value={insuranceType}
                onChange={(e) => setInsuranceType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
              >
                <option value="auto">Seguro Automóvel (Carro de passeio ou particular)</option>
                <option value="frotas">Seguro de Frotas (Empresas, caminhões e utilitários)</option>
                <option value="maquinas-agricolas">Máquinas Agrícolas & Equipamentos (Tratores, colheitadeiras)</option>
                <option value="residencial">Seguro Residencial (Casa ou apartamento)</option>
                <option value="vida">Seguro de Vida (Individual ou familiar)</option>
                <option value="empresarial">Seguro Empresarial (Comércio, indústria ou serviço)</option>
                <option value="saude">Planos de Saúde & Odonto (Sob consulta)</option>
                <option value="previdencia">Previdência Privada (Sob consulta)</option>
                <option value="outro">Outro tipo de seguro / Dúvida geral</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(42) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  E-mail (opcional)
                </label>
                <input
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Cidade de Residência / Uso
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Conte brevemente o que você precisa ou tem em mente
              </label>
              <textarea
                rows={3}
                placeholder="Ex.: Modelo e ano do veículo, se já possui apólice para renovação, dúvidas sobre coberturas ou assistências..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden resize-none"
              ></textarea>
            </div>

            <div className="bg-slate-50 rounded-sm p-3 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
              <Info className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
              <span>
                Seus dados serão tratados com sigilo profissional estritamente para simulação e orientação sobre seguros. Não enviamos spam nem compartilhamos suas informações.
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={(e) => handleSubmit(e, true)}
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-sm text-sm font-semibold transition-colors shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar direto no WhatsApp</span>
              </button>

              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-red-800 text-white py-3 px-4 rounded-sm text-sm font-semibold transition-colors shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4 text-red-300" />
                <span>Solicitar por E-mail</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

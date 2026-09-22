import React, { useState } from 'react';
import { PageView, InsuranceType } from '../types';
import { Shield, MapPin, Phone, Mail, Clock, MessageCircle, AlertCircle, ArrowUpRight, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavigate: (view: PageView, insuranceType?: InsuranceType) => void;
  onOpenLegal: (type: 'privacidade' | 'termos' | 'susep') => void;
  onOpenQuote?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const [logoError, setLogoError] = useState(false);

  const handleLink = (view: PageView, insuranceType?: InsuranceType) => {
    onNavigate(view, insuranceType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent('Olá! Estou entrando em contato através do rodapé do site da Operaseg.');
    window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleLink('inicio')}
              className="inline-flex items-center bg-white rounded-sm px-3.5 py-2 border border-slate-700/60 hover:bg-slate-50 transition-colors focus:outline-hidden focus:ring-1 focus:ring-red-500 cursor-pointer text-left"
              aria-label="Operaseg Corretora de Seguros"
            >
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="Operaseg Corretora de Seguros"
                  className="h-9 sm:h-10 w-auto max-h-10 max-w-[210px] object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-slate-950 flex items-center justify-center text-white">
                    <Shield className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <span className="font-heading font-extrabold text-lg text-slate-900 leading-none block">
                      OPERA<span className="text-red-700">SEG</span>
                    </span>
                    <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider block mt-0.5">
                      Corretora de Seguros
                    </span>
                  </div>
                </div>
              )}
            </button>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Atuação pautada pela transparência, escuta atenta e orientação técnica. Ajudamos pessoas e empresas de Ponta Grossa e região a entender riscos e escolher proteções seguras para seu patrimônio e sua família.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-semibold">Responsável Técnica:</span>
                <span className="text-slate-200">{COMPANY_INFO.founderName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-semibold">Atuação Regulatória:</span>
                <span className="text-slate-300 font-medium">Habilitada perante a SUSEP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-semibold">Sede:</span>
                <span className="text-slate-300 font-medium">Ponta Grossa — PR</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-heading">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('inicio')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('sobre')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  A Operaseg (Institucional)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('como-trabalhamos')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Como trabalhamos (Etapas)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('duvidas')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Dúvidas Frequentes (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('conteudos')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Conteúdos & Blog Educativo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contato')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contato & Localização
                </button>
              </li>
            </ul>
          </div>

          {/* Insurance Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-heading">
              Seguros & Soluções
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('seguro-detalhe', 'auto')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Seguro Auto</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('seguro-detalhe', 'frotas')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Seguro de Frotas</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('seguro-detalhe', 'maquinas-agricolas')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Máquinas Agrícolas & Agro</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('seguro-detalhe', 'residencial')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Seguro Residencial</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('seguro-detalhe', 'vida')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Seguro de Vida</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('seguro-detalhe', 'empresarial')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Seguro Empresarial</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('seguro-detalhe', 'saude')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full text-xs"
                >
                  <span>Planos de Saúde</span>
                  <span className="text-[10px] text-amber-400">Verificar</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('seguro-detalhe', 'previdencia')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full text-xs"
                >
                  <span>Previdência Privada</span>
                  <span className="text-[10px] text-amber-400">Verificar</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact info */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-heading">
              Atendimento em Ponta Grossa
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <span className="block font-medium text-slate-300">Ponta Grossa — PR</span>
                <span className="text-slate-400 block leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-red-400 shrink-0" />
              <div>
                <span className="block font-medium text-slate-300">Telefone:</span>
                <a
                  href={`tel:+55${COMPANY_INFO.phoneRaw}`}
                  className="text-white hover:text-red-400 font-bold tracking-wide transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="block font-medium text-slate-300">WhatsApp Oficial:</span>
                <button
                  onClick={openWhatsApp}
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors cursor-pointer"
                >
                  {COMPANY_INFO.whatsappFormatted}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Instagram className="w-4 h-4 text-red-400 shrink-0" />
              <div>
                <span className="block font-medium text-slate-300">Instagram:</span>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors"
                >
                  {COMPANY_INFO.instagram}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
              <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-medium text-slate-300">Horário Comercial:</span>
                <span className="text-[11px] text-slate-400">{COMPANY_INFO.businessHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-900/90 text-xs text-slate-400 leading-relaxed bg-slate-900/40 p-4 rounded-sm border border-slate-800/80">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-400/90 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-300 font-semibold block mb-0.5">
                Nota Institucional e Regulatória:
              </strong>
              <p>
                A <strong>Operaseg Corretora de Seguros LTDA</strong> atua como intermediadora e consultora de seguros, previdência e planos de saúde junto às companhias autorizadas pela SUSEP. As coberturas, condições, limites indenizatórios, franquias e exclusões variam conforme o produto e a contratação individual. Este portal possui finalidade informativa e consultiva.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright and Legal links */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Operaseg Corretora de Seguros. Todos os direitos reservados. Ponta Grossa — PR.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('privacidade')}
              className="hover:text-slate-200 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenLegal('termos')}
              className="hover:text-slate-200 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

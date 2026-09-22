import React, { useState } from 'react';
import { PageView, InsuranceType } from '../types';
import { Shield, Menu, X, ChevronDown, MessageCircle, PhoneCall, CheckCircle2, Phone, Clock, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView, insuranceType?: InsuranceType) => void;
  onOpenQuote: (insuranceType?: InsuranceType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [insuranceDropdownOpen, setInsuranceDropdownOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleNavClick = (view: PageView, insuranceType?: InsuranceType) => {
    onNavigate(view, insuranceType);
    setMobileMenuOpen(false);
    setInsuranceDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsAppDirect = () => {
    const defaultMsg = encodeURIComponent('Olá! Vim pelo site da Operaseg e gostaria de falar com um especialista em seguros.');
    window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${defaultMsg}`, '_blank');
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      {/* Top micro-bar for Ponta Grossa local recognition */}
      <div id="top-bar" className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-slate-200">Operaseg Corretora</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">Ponta Grossa — PR</span>
            <span className="text-slate-600">•</span>
            <a
              href={`tel:+55${COMPANY_INFO.phoneRaw}`}
              className="text-white hover:text-red-400 font-bold tracking-wide inline-flex items-center gap-1 transition-colors"
              title="Ligue para a Operaseg"
            >
              <Phone className="w-3 h-3 text-red-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-400 hidden md:inline-flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>{COMPANY_INFO.businessHours}</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-red-400 inline-flex items-center gap-1 transition-colors"
              title="Siga no Instagram"
            >
              <Instagram className="w-3 h-3 text-red-400" />
              <span>{COMPANY_INFO.instagram}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline text-[11px]">Centro, Ponta Grossa</span>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - logo.png */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('inicio')}
            className="flex items-center text-left group focus:outline-hidden focus:ring-1 focus:ring-red-600 rounded-sm p-1 transition-opacity hover:opacity-95"
            aria-label="Operaseg Corretora de Seguros"
          >
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Operaseg Corretora de Seguros"
                className="h-10 sm:h-12 w-auto max-h-12 max-w-[210px] sm:max-w-[260px] object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 flex items-center justify-center text-white shadow-sm border border-slate-700">
                  <Shield className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900 leading-none block">
                    OPERA<span className="text-red-700">SEG</span>
                  </span>
                  <p className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
                    Corretora de Seguros
                  </p>
                </div>
              </div>
            )}
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              id="nav-link-inicio"
              onClick={() => handleNavClick('inicio')}
              className={`px-3.5 py-2 rounded-sm text-sm font-medium transition-colors ${
                currentView === 'inicio'
                  ? 'text-red-700 bg-red-50 font-semibold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Início
            </button>

            <button
              id="nav-link-sobre"
              onClick={() => handleNavClick('sobre')}
              className={`px-3.5 py-2 rounded-sm text-sm font-medium transition-colors ${
                currentView === 'sobre'
                  ? 'text-red-700 bg-red-50 font-semibold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              A Operaseg
            </button>

            {/* Seguros Dropdown */}
            <div className="relative">
              <button
                id="nav-link-seguros-dropdown"
                onClick={() => setInsuranceDropdownOpen(!insuranceDropdownOpen)}
                onMouseEnter={() => setInsuranceDropdownOpen(true)}
                className={`px-3.5 py-2 rounded-sm text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  currentView === 'seguros' || currentView === 'seguro-detalhe'
                    ? 'text-red-700 bg-red-50 font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>Seguros</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              {insuranceDropdownOpen && (
                <div
                  id="insurance-dropdown-menu"
                  onMouseLeave={() => setInsuranceDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-64 rounded-sm bg-white border border-slate-200 shadow-xl py-2 z-50"
                >
                  <button
                    onClick={() => handleNavClick('seguros')}
                    className="w-full text-left px-4 py-2.5 text-xs font-semibold text-red-800 uppercase tracking-wider bg-slate-50 hover:bg-red-50 transition-colors border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>Ver Todas as Soluções</span>
                    <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded-sm">Catálogo</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('seguro-detalhe', 'auto')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-red-50 hover:text-red-900 transition-colors flex flex-col"
                  >
                    <span className="font-semibold text-slate-900">Seguro Automóvel</span>
                    <span className="text-xs text-slate-500">Veículos particulares e utilitários</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('seguro-detalhe', 'frotas')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-red-50 hover:text-red-900 transition-colors flex flex-col"
                  >
                    <span className="font-semibold text-slate-900">Seguro de Frotas</span>
                    <span className="text-xs text-slate-500">A partir de 3 veículos para empresas</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('seguro-detalhe', 'maquinas-agricolas')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-red-50 hover:text-red-900 transition-colors flex flex-col"
                  >
                    <span className="font-semibold text-slate-900">Máquinas Agrícolas</span>
                    <span className="text-xs text-slate-500">Tratores, colheitadeiras e implementos</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('seguro-detalhe', 'residencial')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-red-50 hover:text-red-900 transition-colors flex flex-col"
                  >
                    <span className="font-semibold text-slate-900">Seguro Residencial</span>
                    <span className="text-xs text-slate-500">Casas, apartamentos e assistências</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('seguro-detalhe', 'vida')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-red-50 hover:text-red-900 transition-colors flex flex-col"
                  >
                    <span className="font-semibold text-slate-900">Seguro de Vida</span>
                    <span className="text-xs text-slate-500">Proteção financeira e benefícios em vida</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('seguro-detalhe', 'empresarial')}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-red-50 hover:text-red-900 transition-colors flex flex-col"
                  >
                    <span className="font-semibold text-slate-900">Seguro Empresarial</span>
                    <span className="text-xs text-slate-500">Patrimônio, comércios e empresas</span>
                  </button>
                </div>
              )}
            </div>

            <button
              id="nav-link-como-trabalhamos"
              onClick={() => handleNavClick('como-trabalhamos')}
              className={`px-3.5 py-2 rounded-sm text-sm font-medium transition-colors ${
                currentView === 'como-trabalhamos'
                  ? 'text-red-700 bg-red-50 font-semibold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Como trabalhamos
            </button>

            <button
              id="nav-link-duvidas"
              onClick={() => handleNavClick('duvidas')}
              className={`px-3.5 py-2 rounded-sm text-sm font-medium transition-colors ${
                currentView === 'duvidas'
                  ? 'text-red-700 bg-red-50 font-semibold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Dúvidas
            </button>

            <button
              id="nav-link-conteudos"
              onClick={() => handleNavClick('conteudos')}
              className={`px-3.5 py-2 rounded-sm text-sm font-medium transition-colors ${
                currentView === 'conteudos'
                  ? 'text-red-700 bg-red-50 font-semibold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Conteúdos
            </button>

            <button
              id="nav-link-contato"
              onClick={() => handleNavClick('contato')}
              className={`px-3.5 py-2 rounded-sm text-sm font-medium transition-colors ${
                currentView === 'contato'
                  ? 'text-red-700 bg-red-50 font-semibold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Contato
            </button>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-cta-quote-btn"
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-red-800 px-5 py-2.5 rounded-sm text-sm font-semibold transition-all shadow-xs hover:shadow-sm cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-red-300" />
              <span>Falar com um especialista</span>
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('inicio')}
              className={`text-left px-4 py-3 rounded-lg text-base font-medium ${
                currentView === 'inicio' ? 'bg-red-50 text-red-700 font-semibold' : 'text-slate-700'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('sobre')}
              className={`text-left px-4 py-3 rounded-lg text-base font-medium ${
                currentView === 'sobre' ? 'bg-red-50 text-red-700 font-semibold' : 'text-slate-700'
              }`}
            >
              A Operaseg (Quem somos)
            </button>
            <button
              onClick={() => handleNavClick('seguros')}
              className={`text-left px-4 py-3 rounded-lg text-base font-medium ${
                currentView === 'seguros' ? 'bg-red-50 text-red-700 font-semibold' : 'text-slate-700'
              }`}
            >
              Seguros (Todos os produtos)
            </button>
            
            {/* Quick links to categories on mobile */}
            <div className="pl-4 py-1 grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              <button
                onClick={() => handleNavClick('seguro-detalhe', 'auto')}
                className="text-left text-xs p-2 rounded-md bg-slate-50 text-slate-700 hover:bg-red-50 hover:text-red-800"
              >
                🚗 Seguro Auto
              </button>
              <button
                onClick={() => handleNavClick('seguro-detalhe', 'frotas')}
                className="text-left text-xs p-2 rounded-md bg-slate-50 text-slate-700 hover:bg-red-50 hover:text-red-800"
              >
                🚚 Frotas
              </button>
              <button
                onClick={() => handleNavClick('seguro-detalhe', 'maquinas-agricolas')}
                className="text-left text-xs p-2 rounded-md bg-slate-50 text-slate-700 hover:bg-red-50 hover:text-red-800"
              >
                🚜 Agro & Máquinas
              </button>
              <button
                onClick={() => handleNavClick('seguro-detalhe', 'residencial')}
                className="text-left text-xs p-2 rounded-md bg-slate-50 text-slate-700 hover:bg-red-50 hover:text-red-800"
              >
                🏠 Residencial
              </button>
              <button
                onClick={() => handleNavClick('seguro-detalhe', 'vida')}
                className="text-left text-xs p-2 rounded-md bg-slate-50 text-slate-700 hover:bg-red-50 hover:text-red-800"
              >
                ❤️ Seguro de Vida
              </button>
              <button
                onClick={() => handleNavClick('seguro-detalhe', 'empresarial')}
                className="text-left text-xs p-2 rounded-md bg-slate-50 text-slate-700 hover:bg-red-50 hover:text-red-800"
              >
                🏢 Empresarial
              </button>
            </div>

            <button
              onClick={() => handleNavClick('como-trabalhamos')}
              className={`text-left px-4 py-3 rounded-lg text-base font-medium ${
                currentView === 'como-trabalhamos' ? 'bg-red-50 text-red-700 font-semibold' : 'text-slate-700'
              }`}
            >
              Como trabalhamos
            </button>
            <button
              onClick={() => handleNavClick('duvidas')}
              className={`text-left px-4 py-3 rounded-lg text-base font-medium ${
                currentView === 'duvidas' ? 'bg-red-50 text-red-700 font-semibold' : 'text-slate-700'
              }`}
            >
              Dúvidas frequentes
            </button>
            <button
              onClick={() => handleNavClick('conteudos')}
              className={`text-left px-4 py-3 rounded-lg text-base font-medium ${
                currentView === 'conteudos' ? 'bg-red-50 text-red-700 font-semibold' : 'text-slate-700'
              }`}
            >
              Conteúdos & Dicas
            </button>
            <button
              onClick={() => handleNavClick('contato')}
              className={`text-left px-4 py-3 rounded-lg text-base font-medium ${
                currentView === 'contato' ? 'bg-red-50 text-red-700 font-semibold' : 'text-slate-700'
              }`}
            >
              Contato & Localização
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-red-800 py-3 rounded-sm font-semibold text-sm shadow-xs transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-red-300" />
              <span>Falar com um especialista</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppDirect();
              }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 text-white py-3 rounded-sm font-semibold text-sm shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Chamar no WhatsApp Oficial</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { PageView, InsuranceType } from './types';
import { INSURANCES_DATA } from './data/companyData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { LegalModal } from './components/LegalModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { InsuranceCatalogView } from './components/views/InsuranceCatalogView';
import { InsuranceDetailView } from './components/views/InsuranceDetailView';
import { HowWeWorkView } from './components/views/HowWeWorkView';
import { FaqView } from './components/views/FaqView';
import { BlogView } from './components/views/BlogView';
import { ContactView } from './components/views/ContactView';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('inicio');
  const [selectedInsurance, setSelectedInsurance] = useState<InsuranceType>('auto');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteDefaultType, setQuoteDefaultType] = useState<InsuranceType | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacidade' | 'termos' | 'susep' | null>(null);

  // Scroll to top and update dynamic SEO title when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Dynamic Title & OpenGraph update
    let pageTitle = 'Operaseg Corretora de Seguros';
    let metaDescription = 'Corretora de seguros em Ponta Grossa - PR. Especialista em seguro automóvel, frotas empresariais, máquinas agrícolas, residencial, vida e empresarial com as melhores seguradoras do país.';

    switch (currentView) {
      case 'inicio':
      case 'home':
        pageTitle = 'Operaseg Corretora de Seguros';
        break;
      case 'sobre':
        pageTitle = 'Quem Somos | Operaseg Corretora de Seguros';
        metaDescription = 'Conheça a história, os valores e a equipe técnica da Operaseg Corretora de Seguros em Ponta Grossa - PR.';
        break;
      case 'seguros':
        pageTitle = 'Catálogo de Seguros | Operaseg Corretora de Seguros';
        metaDescription = 'Explore nosso portfólio completo: Seguro Auto, Frotas, Máquinas Agrícolas, Residencial, Vida e Empresarial.';
        break;
      case 'seguro-detalhe': {
        const insurance = INSURANCES_DATA.find((item) => item.id === selectedInsurance);
        if (insurance) {
          pageTitle = `${insurance.title} | Operaseg Corretora de Seguros`;
          metaDescription = insurance.shortDescription;
        }
        break;
      }
      case 'como-trabalhamos':
        pageTitle = 'Como Trabalhamos | Consultoria e Suporte no Sinistro | Operaseg';
        metaDescription = 'Entenda nosso método de consultoria imparcial, análise de apólices e assessoria completa em caso de sinistro.';
        break;
      case 'duvidas':
        pageTitle = 'Dúvidas Frequentes sobre Seguros | FAQ Operaseg';
        metaDescription = 'Tire suas dúvidas sobre franquias, coberturas, vigência, cotações e assistência 24 horas.';
        break;
      case 'conteudos':
        pageTitle = 'Dicas & Guias de Seguros | Blog Operaseg';
        metaDescription = 'Artigos práticos e orientações transparentes para economizar e contratar a melhor proteção para seus bens.';
        break;
      case 'contato':
        pageTitle = 'Fale Conosco & Cotação Online | Operaseg Seguros';
        metaDescription = 'Entre em contato com nossos corretores em Ponta Grossa via WhatsApp, telefone ou formulário online.';
        break;
    }

    document.title = pageTitle;

    // Update Meta Description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', metaDescription);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', metaDescription);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', pageTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', metaDescription);
  }, [currentView, selectedInsurance]);

  const handleNavigate = (view: PageView, insuranceType?: InsuranceType) => {
    if (insuranceType) {
      setSelectedInsurance(insuranceType);
    }
    setCurrentView(view);
  };

  const handleOpenQuote = (insuranceType?: InsuranceType) => {
    setQuoteDefaultType(insuranceType);
    setIsQuoteModalOpen(true);
  };

  const handleSelectInsurance = (type: InsuranceType) => {
    setSelectedInsurance(type);
    setCurrentView('seguro-detalhe');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-red-800 selection:text-white antialiased">
      
      {/* Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content View Container */}
      <main className="flex-1 w-full">
        {(currentView === 'inicio' || currentView === 'home') && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentView === 'sobre' && (
          <AboutView
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentView === 'seguros' && (
          <InsuranceCatalogView
            onSelectInsurance={handleSelectInsurance}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentView === 'seguro-detalhe' && (
          <InsuranceDetailView
            insuranceType={selectedInsurance}
            onSelectInsurance={handleSelectInsurance}
            onBackToCatalog={() => setCurrentView('seguros')}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentView === 'como-trabalhamos' && (
          <HowWeWorkView
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'duvidas' && (
          <FaqView
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'conteudos' && (
          <BlogView onOpenQuote={() => handleOpenQuote()} />
        )}

        {currentView === 'contato' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Interactive Floating WhatsApp Button (Mobile & Desktop) */}
      <WhatsAppFloatingButton
        currentView={currentView}
        selectedInsurance={selectedInsurance}
      />

      {/* Lead Generation & Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialInsuranceType={quoteDefaultType}
      />

      {/* Legal & Compliance Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

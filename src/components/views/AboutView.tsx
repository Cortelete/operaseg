import React from 'react';
import {
  Shield,
  MapPin,
  CheckCircle2,
  Building,
  PhoneCall,
  Star,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface AboutViewProps {
  onOpenQuote: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenQuote }) => {
  return (
    <div id="about-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header section */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-red-50 text-red-900 border border-red-200 text-xs font-semibold">
          <MapPin className="w-3.5 h-3.5 text-red-700" />
          <span>Institucional • Ponta Grossa, Paraná</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
          Conheça a Operaseg
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Uma corretora de seguros criada para oferecer proximidade, transparência e orientação técnica verdadeira para pessoas e empresas.
        </p>
      </div>

      {/* Purpose & Origin */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-slate-200 shadow-xs space-y-6">
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Nossa Proposta e Propósito
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              O mercado de seguros frequentemente é percebido como distante ou excessivamente burocrático: contratos longos, termos em linguagem técnica de difícil compreensão e atendimentos impessoais.
            </p>
            <p>
              A <strong>Operaseg Corretora de Seguros LTDA</strong> foi estruturada com uma visão diferente: acreditamos que contratar uma proteção deve ser um processo descomplicado, no qual o segurado sabe exatamente quais são os limites, as franquias e as situações cobertas pela sua apólice.
            </p>
            <p>
              Nosso papel não é simplesmente emitir uma proposta com a seguradora. Atuamos como consultores independentes, comparando as alternativas de mercado para encontrar a solução que melhor se adeque à realidade de cada cliente em Ponta Grossa e nos Campos Gerais.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900">Consultoria Independente</strong>
                <span>Comparamos opções entre seguradoras homologadas.</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900">Atendimento Próximo</strong>
                <span>Presença ativa antes, durante e após a contratação.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate facts */}
        <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-10 rounded-sm border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-red-950/60 border border-red-700/50 flex items-center justify-center text-red-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Identificação Institucional
              </h3>
              <p className="text-xs text-slate-400">Dados oficiais e regulatórios</p>
            </div>
          </div>

          <div className="space-y-4 text-xs text-slate-300">
            <div>
              <span className="text-slate-400 block mb-1">Razão Social:</span>
              <span className="text-white font-semibold block text-sm">{COMPANY_INFO.legalName}</span>
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Sócia-Administradora:</span>
              <span className="text-slate-200 font-semibold block">{COMPANY_INFO.founderName}</span>
              <span className="text-red-400 text-[11px] block mt-0.5">{COMPANY_INFO.founderExperience}</span>
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Início das Atividades (CNPJ):</span>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-semibold">{COMPANY_INFO.activeSince}</span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-sm border border-emerald-800">Ativa</span>
              </div>
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Atividade Econômica Principal (CNAE):</span>
              <span className="text-slate-300 block leading-relaxed">{COMPANY_INFO.cnae}</span>
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Endereço da Sede:</span>
              <span className="text-slate-200 font-medium block">{COMPANY_INFO.address}</span>
              <span className="text-slate-400 text-[11px] block mt-0.5">{COMPANY_INFO.referenceLocation}</span>
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Contato & Expediente:</span>
              <span className="text-slate-200 font-bold">{COMPANY_INFO.phone}</span>
              <span className="text-slate-400 text-[11px] block mt-0.5">{COMPANY_INFO.businessHours}</span>
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Reputação no Google Meu Negócio:</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white font-bold">{COMPANY_INFO.googleRating}</span>
                <span className="text-slate-400 text-[11px]">({COMPANY_INFO.googleReviewsCount})</span>
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 text-[11px] font-semibold underline inline-flex items-center gap-0.5 ml-1"
                >
                  <span>Ver perfil</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <p className="text-[11px] text-slate-400 leading-snug">
              A Operaseg opera estritamente de acordo com as normas da Superintendência de Seguros Privados (SUSEP) e o Código de Defesa do Consumidor.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Profile: Eliane Santos de Lima de Oliveira */}
      <div id="leadership-section" className="bg-white rounded-sm p-8 sm:p-12 border border-slate-200 shadow-xs space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Liderança e Responsabilidade
          </span>
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
            Quem está por trás da Operaseg
          </h2>
          <p className="text-sm text-slate-600">
            Conheça a profissional responsável pela condução técnica e pelo atendimento aos clientes da corretora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-4 bg-slate-50 rounded-sm p-6 border border-slate-200 text-center space-y-4">
            <div className="w-28 h-28 rounded-sm bg-gradient-to-br from-slate-900 to-red-950 text-white flex items-center justify-center font-heading font-extrabold text-3xl mx-auto shadow-xs border border-slate-700">
              ES
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-slate-900">
                {COMPANY_INFO.founderName}
              </h3>
              <p className="text-xs font-semibold text-red-700 mt-0.5">
                {COMPANY_INFO.founderTitle}
              </p>
            </div>
            <div className="text-[11px] text-slate-600 bg-white p-3 rounded-sm border border-slate-200 text-left space-y-1">
              <span className="font-semibold block text-slate-800">Conformidade e Habilitação:</span>
              <span className="text-slate-600 leading-tight block">
                Profissional habilitada para intermediação de seguros e consultoria patrimonial.
              </span>
            </div>
          </div>

          {/* Real Professional Trajectory */}
          <div className="md:col-span-8 space-y-5 text-sm text-slate-700 leading-relaxed">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-2.5 py-1 rounded-sm border border-red-200">
                Experiência no Mercado Segurador
              </span>
              <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-sm border border-slate-200">
                Mais de 6 anos ligada à MAPFRE Seguros
              </span>
            </div>

            <h4 className="text-xl font-bold font-heading text-slate-900">
              Trajetória e Compromisso com o Cliente
            </h4>
            
            <p>
              À frente da Operaseg está <strong>{COMPANY_INFO.founderName}</strong>, sócia-administradora com histórico profissional consolidado de <strong>mais de seis anos de atuação direta ligada à MAPFRE Seguros</strong>, uma das maiores e mais conceituadas seguradoras globais.
            </p>

            <div className="bg-slate-50 p-5 rounded-sm border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs uppercase tracking-wider">
                <Shield className="w-4 h-4 text-red-700" />
                <span>Transparência Institucional</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A Operaseg Corretora atua com sede própria no Centro de Ponta Grossa. A liderança técnica e os profissionais associados reúnem sólida experiência consolidada no mercado segurador nacional, conhecendo a fundo as normas das seguradoras, as cláusulas de apólices e os processos de regulação de sinistros.
              </p>
            </div>

            <p>
              Sua filosofia de trabalho baseia-se na convicção de que seguros são instrumentos reais de proteção familiar e patrimonial. Ao falar com a Operaseg, você dialoga com quem compreende as minúcias técnicas de coberturas e franquias, oferecendo segurança genuína e recomendações sob medida.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atendimento humanizado direto com corretores credenciados</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* O Que a Operaseg Faz na Prática */}
      <div id="what-we-do-section" className="bg-white rounded-sm p-8 sm:p-12 border border-slate-200 shadow-xs space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-2.5 py-1 rounded-sm border border-red-200 inline-block">
            Atuação Completa de Ponta a Ponta
          </span>
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
            O que a Operaseg faz por você e pela sua empresa
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Nossa corretora cobre todo o ciclo de proteção securitária, desde o primeiro diagnóstico do risco até o suporte integral no momento do sinistro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 space-y-2.5">
            <div className="w-8 h-8 rounded-sm bg-red-800 text-white flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h4 className="font-heading font-bold text-slate-900 text-sm">
              Prospecção e Diagnóstico
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mapeamos seu perfil, rotina, veículos ou operação empresarial para identificar exposições e necessidades reais de proteção.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 space-y-2.5">
            <div className="w-8 h-8 rounded-sm bg-red-800 text-white flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h4 className="font-heading font-bold text-slate-900 text-sm">
              Elaboração e Comparação de Propostas
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comparamos condições entre diversas companhias seguradoras homologadas, traduzindo franquias e cláusulas de modo simples.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 space-y-2.5">
            <div className="w-8 h-8 rounded-sm bg-red-800 text-white flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h4 className="font-heading font-bold text-slate-900 text-sm">
              Negociação Técnica Especializada
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Buscamos os melhores termos comerciais e coberturas otimizadas junto às seguradoras parceiras, defendendo seu interesse.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 space-y-2.5">
            <div className="w-8 h-8 rounded-sm bg-red-800 text-white flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h4 className="font-heading font-bold text-slate-900 text-sm">
              Venda e Formalização Segura
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Emissão transparente da apólice com conferência minuciosa de cada item para assegurar conformidade plena antes da assinatura.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 space-y-2.5">
            <div className="w-8 h-8 rounded-sm bg-red-800 text-white flex items-center justify-center font-bold text-xs">
              05
            </div>
            <h4 className="font-heading font-bold text-slate-900 text-sm">
              Acompanhamento e Renovação Preventiva
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Monitoramento contínuo da vigência da apólice com cotações prévias para garantir renovações vantajosas e sem perda de cobertura.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 space-y-2.5">
            <div className="w-8 h-8 rounded-sm bg-red-800 text-white flex items-center justify-center font-bold text-xs">
              06
            </div>
            <h4 className="font-heading font-bold text-slate-900 text-sm">
              Atendimento Personalizado e Sinistros
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Suporte próximo tanto no Centro de Ponta Grossa quanto remoto via WhatsApp, com orientação ágil na regulação de sinistros.
            </p>
          </div>
        </div>
      </div>

      {/* Nossa Forma de Trabalhar */}
      <div className="bg-slate-50 rounded-sm p-8 sm:p-12 border border-slate-200 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-red-800">
            Nossa Filosofia
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
            Nossa forma de trabalhar
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Priorizamos a relação humana e a ética profissional em cada etapa do atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs space-y-2.5">
            <span className="font-heading font-bold text-slate-900 text-base block">
              1. Escuta Ativa
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Primeiro ouvimos o que você precisa e qual é o seu orçamento, sem pressa e sem empurrar pacotes padronizados.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs space-y-2.5">
            <span className="font-heading font-bold text-slate-900 text-base block">
              2. Clareza nas Condições
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Apresentamos os pontos positivos e também as limitações de cada apólice, garantindo que não existam surpresas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs space-y-2.5">
            <span className="font-heading font-bold text-slate-900 text-base block">
              3. Fidelidade ao Segurado
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              A corretora é a defensora do interesse do cliente perante a seguradora, atuando com firmeza técnica na liquidação de sinistros.
            </p>
          </div>
        </div>

        <div className="pt-6 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-red-800 text-white px-6 py-3.5 rounded-sm text-xs font-semibold transition-colors cursor-pointer shadow-xs"
          >
            <PhoneCall className="w-4 h-4 text-red-400" />
            <span>Falar com a nossa equipe em Ponta Grossa</span>
          </button>
        </div>
      </div>

    </div>
  );
};

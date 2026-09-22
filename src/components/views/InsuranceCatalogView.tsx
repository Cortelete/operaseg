import React, { useState } from 'react';
import { InsuranceType, PageView } from '../../types';
import { INSURANCES_DATA, COMPANY_INFO } from '../../data/companyData';
import { Shield, Car, Home as HomeIcon, Heart, Building2, Activity, Wallet, ArrowRight, MessageCircle, AlertCircle, Truck, Tractor } from 'lucide-react';

interface InsuranceCatalogViewProps {
  onSelectInsurance: (type: InsuranceType) => void;
  onOpenQuote: (type?: InsuranceType) => void;
}

export const InsuranceCatalogView: React.FC<InsuranceCatalogViewProps> = ({
  onSelectInsurance,
  onOpenQuote,
}) => {
  const [filter, setFilter] = useState<'todos' | 'confirmados' | 'a_confirmar'>('todos');

  const filteredItems = INSURANCES_DATA.filter((item) => {
    if (filter === 'confirmados') return item.status === 'confirmado';
    if (filter === 'a_confirmar') return item.status === 'a_confirmar';
    return true;
  });

  const getIcon = (id: InsuranceType) => {
    switch (id) {
      case 'auto':
        return <Car className="w-6 h-6" />;
      case 'frotas':
        return <Truck className="w-6 h-6" />;
      case 'maquinas-agricolas':
        return <Tractor className="w-6 h-6" />;
      case 'residencial':
        return <HomeIcon className="w-6 h-6" />;
      case 'vida':
        return <Heart className="w-6 h-6" />;
      case 'empresarial':
        return <Building2 className="w-6 h-6" />;
      case 'saude':
        return <Activity className="w-6 h-6" />;
      case 'previdencia':
        return <Wallet className="w-6 h-6" />;
      default:
        return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <div id="insurance-catalog-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Page Title & Intro */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-xs border border-red-200 inline-block">
          Portfólio de Seguros & Proteção
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
          Nossas Soluções em Seguros
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Cada produto com explicações didáticas, critérios de cotação e transparência sobre coberturas. Selecione uma modalidade para ver detalhes completos.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        <button
          onClick={() => setFilter('todos')}
          className={`px-4 py-2 rounded-sm text-xs font-semibold transition-colors cursor-pointer ${
            filter === 'todos'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Todos os Seguros ({INSURANCES_DATA.length})
        </button>
        <button
          onClick={() => setFilter('confirmados')}
          className={`px-4 py-2 rounded-sm text-xs font-semibold transition-colors cursor-pointer ${
            filter === 'confirmados'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Principais Soluções (Auto, Casa, Vida, Empresa)
        </button>
        <button
          onClick={() => setFilter('a_confirmar')}
          className={`px-4 py-2 rounded-sm text-xs font-semibold transition-colors cursor-pointer ${
            filter === 'a_confirmar'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Soluções Complementares (Saúde & Previdência)
        </button>
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((insurance) => (
          <div
            key={insurance.id}
            id={`catalog-card-${insurance.id}`}
            className="bg-white rounded-sm p-7 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-sm bg-red-50 text-red-700 flex items-center justify-center border border-red-100">
                  {getIcon(insurance.id)}
                </div>
                {insurance.status === 'a_confirmar' ? (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-xs bg-slate-100 text-slate-700 border border-slate-300">Sob Consulta</span>
                ) : (
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-xs bg-slate-100 text-slate-700">
                    {insurance.badge}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  {insurance.title}
                </h3>
                <p className="text-xs font-semibold text-red-700 mt-1">
                  {insurance.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {insurance.shortDescription}
              </p>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-1.5">
                  Para quem é recomendado:
                </span>
                <ul className="space-y-1 text-xs text-slate-600">
                  {insurance.whoIsItFor.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-red-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => onSelectInsurance(insurance.id)}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-red-950 text-white rounded-sm text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver página completa e coberturas</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenQuote(insurance.id)}
                className="w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-sm text-xs font-semibold transition-colors cursor-pointer"
              >
                Solicitar cotação deste seguro
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance warning banner */}
      <div className="p-5 rounded-sm bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-3 leading-relaxed">
        <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
        <p>
          <strong>Aviso Importante:</strong> As coberturas, condições, limites de indenização, franquias e exclusões variam de acordo com o produto contratado, o perfil declarado e a seguradora parceira selecionada. Sempre consulte a apólice e as Condições Gerais antes da contratação. A equipe da Operaseg está disponível para orientar cada detalhe técnico.
        </p>
      </div>

    </div>
  );
};

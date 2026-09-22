import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface LegalModalProps {
  type: 'privacidade' | 'termos' | 'susep' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const getTitle = () => {
    switch (type) {
      case 'privacidade':
        return 'Política de Privacidade e LGPD';
      case 'termos':
        return 'Termos de Uso do Site';
      case 'susep':
        return 'Informações Regulatórias e SUSEP';
      default:
        return 'Informações Legais';
    }
  };

  return (
    <div
      id="legal-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="legal-modal-dialog"
        className="bg-white rounded-sm max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-red-700" />
            <h3 className="text-xl font-bold font-heading text-slate-900">
              {getTitle()}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-sm text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
          {type === 'privacidade' && (
            <>
              <p>
                A <strong>Operaseg Corretora de Seguros</strong>, com atuação em Ponta Grossa — PR, tem o compromisso de proteger a privacidade e os dados pessoais de seus clientes e usuários, em total conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>
              <h4 className="font-bold text-slate-900 text-base pt-2">1. Coleta e Finalidade dos Dados</h4>
              <p>
                Os dados fornecidos em nossos canais (como nome, telefone, WhatsApp, e-mail e informações do bem a ser segurado) são coletados exclusivamente com o consentimento do titular para:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Elaboração de estudos de risco e cotações de seguros solicitadas pelo usuário;</li>
                <li>Comunicação direta sobre alternativas de coberturas e esclarecimento de dúvidas;</li>
                <li>Intermediação e suporte na contratação junto às companhias seguradoras parceiras reguladas pela SUSEP.</li>
              </ul>
              <h4 className="font-bold text-slate-900 text-base pt-2">2. Não Compartilhamento para Fins de Marketing</h4>
              <p>
                Não comercializamos nem compartilhamos seus dados com terceiros para fins publicitários ou venda de cadastros. O compartilhamento ocorre unicamente com as seguradoras autorizadas estritamente para o cálculo de propostas solicitadas por você.
              </p>
              <h4 className="font-bold text-slate-900 text-base pt-2">3. Direitos do Titular</h4>
              <p>
                Você pode a qualquer momento solicitar a confirmação da existência de tratamento, a correção de dados incompletos ou a exclusão dos dados coletados através dos nossos canais de atendimento em Ponta Grossa.
              </p>
            </>
          )}

          {type === 'termos' && (
            <>
              <p>
                Bem-vindo ao site institucional da <strong>Operaseg Corretora de Seguros</strong>. Ao navegar e utilizar nossos canais, você concorda com as diretrizes aqui descritas.
              </p>
              <h4 className="font-bold text-slate-900 text-base pt-2">1. Natureza Informativa e Consultiva</h4>
              <p>
                O conteúdo deste website tem caráter primordialmente informativo e educativo, com o propósito de apresentar a empresa, esclarecer conceitos do mercado segurador e facilitar o contato para cotações.
              </p>
              <h4 className="font-bold text-slate-900 text-base pt-2">2. Condições das Apólices</h4>
              <p>
                A contratação de qualquer seguro está sujeita à aceitação de risco pela respectiva companhia seguradora e à emissão formal da apólice. As coberturas, limites de indenização, franquias, prazos de carência e riscos excluídos são regulados pelas Condições Gerais de cada seguradora registrada na SUSEP.
              </p>
              <h4 className="font-bold text-slate-900 text-base pt-2">3. Propriedade Intelectual</h4>
              <p>
                Os textos informativos, identidade visual e elementos da marca Operaseg são protegidos pela legislação de direitos autorais e de propriedade industrial.
              </p>
            </>
          )}

          {type === 'susep' && (
            <>
              <p>
                A atividade de corretagem de seguros no Brasil é legalmente regulada pelo <strong>Decreto-Lei nº 73/1966</strong> e fiscalizada pela <strong>Superintendência de Seguros Privados (SUSEP)</strong>, autarquia vinculada ao Ministério da Fazenda.
              </p>
              <h4 className="font-bold text-slate-900 text-base pt-2">1. Papel do Corretor Habilitado</h4>
              <p>
                O corretor de seguros é o intermediário legalmente autorizado para angariar e promover contratos de seguros entre o consumidor (segurado) e as sociedades seguradoras. Sua função primordial é a orientação técnica imparcial e a defesa dos interesses do segurado.
              </p>
              <h4 className="font-bold text-slate-900 text-base pt-2">2. Consulta Pública Cadastral</h4>
              <p>
                Qualquer consumidor pode verificar a regularidade de uma corretora ou profissional de seguros no site oficial da SUSEP (www.susep.gov.br) através da consulta pública do cadastro de corretores.
              </p>
              <h4 className="font-bold text-slate-900 text-base pt-2">3. Dados da Operaseg</h4>
              <p>
                A Operaseg mantém sua atuação em estrita conformidade regulatória. Para conferência de registro, consulte nosso número de processo SUSEP ou solicite via canais de atendimento em Ponta Grossa — PR.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-sm text-sm font-semibold hover:bg-slate-800"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

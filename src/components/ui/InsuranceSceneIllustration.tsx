import React from 'react';

type VisualSceneType = 'auto' | 'frotas' | 'maquinas-agricolas' | 'residencial' | 'vida' | 'empresarial' | 'saude' | 'previdencia';

interface InsuranceSceneIllustrationProps {
  type: VisualSceneType;
  className?: string;
}

export const InsuranceSceneIllustration: React.FC<InsuranceSceneIllustrationProps> = ({
  type,
  className = '',
}) => {
  switch (type) {
    case 'auto':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-950 text-white ${className}`}>
          {/* Subtle architectural grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          
          {/* Elegant automotive route silhouette */}
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 400 240" fill="none" preserveAspectRatio="none">
            <path d="M-20 200 C80 180, 160 220, 240 170 C320 120, 360 140, 420 110" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6 6" />
            <path d="M-20 220 C100 200, 180 230, 280 180 C360 130, 390 145, 430 125" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
            {/* Soft ambient pulse */}
            <circle cx="240" cy="170" r="28" fill="#dc2626" fillOpacity="0.15" />
            <circle cx="240" cy="170" r="5" fill="#f87171" />
          </svg>

          {/* Foreground minimalist vehicle profile */}
          <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-red-400">Risco & Tráfego</span>
              <span className="text-[11px] font-medium text-slate-400">Ponta Grossa · BR-376 / PR-151</span>
            </div>

            <div className="space-y-1.5 my-auto py-4">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
                Mobilidade Protegida
              </div>
              <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                Guincho 24h sem limite, carro reserva imediato e proteção patrimonial contra colisão e terceiros.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Acionamento 24h para socorro em pista</span>
              <span className="ml-auto font-mono text-slate-400">01 / 06</span>
            </div>
          </div>
        </div>
      );

    case 'frotas':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-tr from-slate-900 via-slate-850 to-slate-950 text-white ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 240" fill="none" preserveAspectRatio="none">
            <line x1="40" y1="40" x2="360" y2="40" stroke="#334155" strokeWidth="1" />
            <line x1="40" y1="100" x2="360" y2="100" stroke="#334155" strokeWidth="1" />
            <line x1="40" y1="160" x2="360" y2="160" stroke="#334155" strokeWidth="1" />
            <line x1="40" y1="220" x2="360" y2="220" stroke="#334155" strokeWidth="1" />
            <circle cx="90" cy="100" r="16" fill="#991b1b" fillOpacity="0.4" />
            <circle cx="210" cy="160" r="16" fill="#991b1b" fillOpacity="0.4" />
            <circle cx="310" cy="100" r="16" fill="#991b1b" fillOpacity="0.4" />
          </svg>

          <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-red-400">Logística & Gestão</span>
              <span className="text-[11px] font-medium text-slate-400">A partir de 3 veículos</span>
            </div>

            <div className="space-y-1.5 my-auto py-4">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
                Frotas Corporativas
              </div>
              <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                Gestão centralizada de riscos para utilitários, pesados e veículos de representação com franquia empresarial otimizada.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Assistência especializada para pesados e leves</span>
              <span className="ml-auto font-mono text-slate-400">02 / 06</span>
            </div>
          </div>
        </div>
      );

    case 'maquinas-agricolas':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-tr from-amber-950/90 via-slate-900 to-slate-950 text-white ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          
          {/* Subtle agricultural furrow contour lines */}
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 400 240" fill="none" preserveAspectRatio="none">
            <path d="M-10 160 Q100 130 200 170 T410 140" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
            <path d="M-10 185 Q110 155 210 195 T410 165" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
            <path d="M-10 210 Q120 180 220 220 T410 190" stroke="#f59e0b" strokeWidth="1" opacity="0.25" />
            <circle cx="280" cy="120" r="32" fill="#d97706" fillOpacity="0.12" />
          </svg>

          <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">Agronegócio dos Campos Gerais</span>
              <span className="text-[11px] font-medium text-slate-400">Penhor & Financiamento</span>
            </div>

            <div className="space-y-1.5 my-auto py-4">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
                Máquinas & Safra
              </div>
              <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                Cobertura de tombamento, colisão, queima na lavoura e trânsito rodoviário para tratores e colheitadeiras.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Aceito no BB, Sicredi, Sicoob e bancos rurais</span>
              <span className="ml-auto font-mono text-slate-400">03 / 06</span>
            </div>
          </div>
        </div>
      );

    case 'residencial':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-tr from-slate-900 via-slate-850 to-slate-950 text-white ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          
          {/* Architectural elevation lines */}
          <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 400 240" fill="none">
            <polygon points="120,180 200,90 280,180" stroke="#ffffff" strokeWidth="1.5" />
            <rect x="150" y="140" width="100" height="70" stroke="#ffffff" strokeWidth="1" />
            <line x1="40" y1="210" x2="360" y2="210" stroke="#dc2626" strokeWidth="2" />
          </svg>

          <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-red-400">Patrimônio Familiar</span>
              <span className="text-[11px] font-medium text-slate-400">Casa ou Apartamento</span>
            </div>

            <div className="space-y-1.5 my-auto py-4">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
                O Refúgio do Lar
              </div>
              <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                Proteção estrutural contra incêndio e vendaval com encanador, eletricista e chaveiro 24h sem custo adicional.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Danos elétricos para aparelhos e mobília</span>
              <span className="ml-auto font-mono text-slate-400">04 / 06</span>
            </div>
          </div>
        </div>
      );

    case 'vida':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-tr from-slate-950 via-slate-900 to-rose-950/60 text-white ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 240" fill="none">
            <circle cx="200" cy="120" r="60" stroke="#f43f5e" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="120" r="30" stroke="#f43f5e" strokeWidth="1.5" />
            <circle cx="200" cy="120" r="6" fill="#f43f5e" />
          </svg>

          <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-rose-400">Responsabilidade & Futuro</span>
              <span className="text-[11px] font-medium text-slate-400">Benefícios em Vida</span>
            </div>

            <div className="space-y-1.5 my-auto py-4">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
                Segurança Familiar
              </div>
              <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                Liquidez direta aos beneficiários sem inventário judicial e indenização em vida para diagnósticos graves.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Diárias por incapacidade para profissionais autônomos</span>
              <span className="ml-auto font-mono text-slate-400">05 / 06</span>
            </div>
          </div>
        </div>
      );

    case 'empresarial':
    default:
      return (
        <div className={`relative overflow-hidden bg-gradient-to-tr from-slate-900 via-slate-850 to-slate-950 text-white ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          
          <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 400 240" fill="none">
            <rect x="60" y="60" width="80" height="150" stroke="#ffffff" strokeWidth="1" />
            <rect x="160" y="40" width="90" height="170" stroke="#dc2626" strokeWidth="1.5" />
            <rect x="270" y="90" width="70" height="120" stroke="#ffffff" strokeWidth="1" />
          </svg>

          <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-red-400">Continuidade de Negócio</span>
              <span className="text-[11px] font-medium text-slate-400">Comércio & Indústria</span>
            </div>

            <div className="space-y-1.5 my-auto py-4">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
                Blindagem Comercial
              </div>
              <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                Proteção para instalações, estoques, maquinários e responsabilidade civil contra danos a clientes e terceiros.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Adequado para lojas, clínicas e fábricas locais</span>
              <span className="ml-auto font-mono text-slate-400">06 / 06</span>
            </div>
          </div>
        </div>
      );
  }
};

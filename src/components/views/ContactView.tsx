import React, { useState } from 'react';
import { COMPANY_INFO, BROKERS_TEAM } from '../../data/companyData';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Instagram,
  Shield,
  ExternalLink,
  Users,
  UserCheck,
  Star
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [insuranceType, setInsuranceType] = useState('auto');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent, viaWhatsApp = false) => {
    e.preventDefault();

    if (viaWhatsApp) {
      const formatted = `Olá! Meu nome é ${name || 'Cliente'}.
Vim pela página de contato da Operaseg em Ponta Grossa.
Tipo de seguro: ${insuranceType}
${message ? `Mensagem: ${message}` : ''}
${whatsapp ? `WhatsApp: ${whatsapp}` : ''}
${email ? `E-mail: ${email}` : ''}`;
      window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(formatted)}`, '_blank');
    }

    setIsSuccess(true);
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent('Olá! Vim pela página de contato da Operaseg e gostaria de falar com vocês.');
    window.open(`https://wa.me/55${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div id="contact-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Title */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-md border border-red-200 inline-block">
          Canais de Atendimento
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
          Vamos conversar?
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Conte o que você precisa e nossa equipe entra em contato para entender seu perfil.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Info & Location */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-sm border border-slate-800 space-y-6 shadow-md">
            <div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Operaseg Corretora
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Ponta Grossa — Paraná & Região dos Campos Gerais
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-200 text-sm">Endereço</strong>
                  <span className="text-slate-300 block mt-0.5 font-medium leading-relaxed">
                    {COMPANY_INFO.address}
                  </span>
                  <a
                    href={COMPANY_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 inline-flex items-center gap-1 text-[11px] font-semibold mt-1"
                  >
                    <span>Ver no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-200 text-sm">Telefone de Contato</strong>
                  <div className="flex items-center gap-3 mt-1">
                    <a
                      href={`tel:+55${COMPANY_INFO.phoneRaw}`}
                      className="text-base font-bold text-white hover:text-red-400 transition-colors font-heading tracking-wide"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <a
                      href={`tel:+55${COMPANY_INFO.phoneRaw}`}
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold rounded-md inline-flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-red-400" />
                      <span>Ligar</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-200 text-sm">WhatsApp Oficial</strong>
                  <span className="text-sm font-semibold text-emerald-400 block mt-0.5">
                    {COMPANY_INFO.whatsappFormatted}
                  </span>
                  <button
                    onClick={openWhatsAppDirect}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold text-xs mt-1 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Iniciar conversa no WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-200 text-sm">Horário de Atendimento</strong>
                  <span className="text-slate-300 block mt-0.5 font-medium">{COMPANY_INFO.businessHours}</span>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-200 text-sm">Instagram Oficial</strong>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 font-semibold text-sm block mt-0.5 inline-flex items-center gap-1"
                  >
                    <span>{COMPANY_INFO.instagram}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* E-mail channel note */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-200 text-sm">E-mails de Atendimento</strong>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                    E-mails corporativos e canais individuais de cada corretor em fase de ativação. Atendimento prioritário pelo telefone e WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Styled Map Card for Ponta Grossa */}
          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Localização em Ponta Grossa, PR
              </span>
              <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded">
                Centro
              </span>
            </div>

            {/* Google Rating badge */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-sm border border-slate-200">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-900">{COMPANY_INFO.googleRating}</span>
                <span className="text-[11px] text-slate-500">({COMPANY_INFO.googleReviewsCount})</span>
              </div>
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-red-700 hover:text-red-800 inline-flex items-center gap-1"
              >
                <span>Ver no Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Maps Official Embed */}
            <div className="w-full rounded-sm overflow-hidden border border-slate-200 shadow-xs bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0465895052935!2d-50.156330200000006!3d-25.100284199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81b805f02aa8d%3A0xf0a160c99890833d!2sOperaseg%20Corretora%20de%20Seguros!5e0!3m2!1spt-BR!2sbr!4v1790097767781!5m2!1spt-BR!2sbr"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Mapa oficial da Operaseg Corretora de Seguros em Ponta Grossa"
                className="w-full h-64 sm:h-72"
              />
            </div>

            <div className="w-full bg-slate-50 rounded-sm border border-slate-200 p-4 space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-xs">
                    R. Benjamin Constant, 1 - Sl 3
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Centro, Ponta Grossa - PR, 84010-380
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Atendimento presencial com horário agendado ou consultoria remota.
                  </p>
                </div>
              </div>

              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Abrir perfil no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-sm p-8 sm:p-12 border border-slate-200 shadow-xs">
          <div className="space-y-2 mb-6">
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Solicitar atendimento
            </h3>
            <p className="text-sm text-slate-600">
              Envie sua mensagem. Entraremos em contato com respeito ao seu tempo e suas prioridades.
            </p>
          </div>

          {isSuccess ? (
            <div className="p-8 rounded-sm bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold font-heading text-slate-900">
                Mensagem enviada com sucesso!
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                Agradecemos o contato. A equipe da Operaseg Corretora responderá em breve através do WhatsApp ou e-mail fornecido.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-4 px-6 py-2.5 bg-slate-900 text-white rounded-sm text-xs font-semibold hover:bg-slate-800"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-sm text-sm focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(42) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-sm text-sm focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-sm text-sm focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Tipo de Seguro de Interesse
                </label>
                <select
                  value={insuranceType}
                  onChange={(e) => setInsuranceType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-sm text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden"
                >
                  <option value="Seguro Auto">Seguro Automóvel (Carro de passeio ou particular)</option>
                  <option value="Seguro de Frotas">Seguro de Frotas (Empresas, caminhões e frotas mistas)</option>
                  <option value="Máquinas Agrícolas">Máquinas Agrícolas & Equipamentos (Tratores, colheitadeiras)</option>
                  <option value="Seguro Residencial">Seguro Residencial (Casa ou apartamento)</option>
                  <option value="Seguro de Vida">Seguro de Vida (Individual ou familiar)</option>
                  <option value="Seguro Empresarial">Seguro Empresarial (Patrimonial ou comércio)</option>
                  <option value="Planos de Saúde">Planos de Saúde & Odonto (Sob consulta)</option>
                  <option value="Previdência Privada">Previdência Privada (Sob consulta)</option>
                  <option value="Outro assunto">Outro assunto / Dúvida geral</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Mensagem ou detalhes da sua solicitação
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Escreva como podemos ajudar você..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-sm text-sm focus:bg-white focus:ring-2 focus:ring-red-600 focus:outline-hidden resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  id="btn-solicitar-atendimento"
                  className="flex-1 py-3.5 px-6 bg-slate-900 hover:bg-red-950 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4 text-red-400" />
                  <span>Solicitar atendimento</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  id="btn-solicitar-whatsapp"
                  className="flex-1 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-sm text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar pelo WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

      {/* Broker Team / Atendimento Especializado Section */}
      <div className="bg-white rounded-sm p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-red-700">
              <Users className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Equipe de Corretores & Consultores
              </span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Atendimento Especializado por Área
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl">
              Cada perfil de risco exige um olhar técnico específico. Centralizamos os atendimentos pelo telefone e WhatsApp principal enquanto finalizamos a inclusão dos canais diretos de cada corretor.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-sm p-4 text-xs text-slate-600 max-w-xs">
            <span className="font-semibold text-slate-900 block mb-1">Canais Diretos em Atualização:</span>
            <span>O número de WhatsApp e o e-mail individual de cada corretor serão publicados em breve para atendimento segmentado.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BROKERS_TEAM.map((broker) => (
            <div
              key={broker.id}
              className="bg-slate-50 hover:bg-slate-100/80 rounded-sm p-6 border border-slate-200/80 transition-colors space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-sm bg-slate-900 text-white flex items-center justify-center">
                    <UserCheck className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                    {broker.status === 'ativo' ? 'Atendimento Ativo' : 'Em breve'}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-slate-900 text-base">
                  {broker.name}
                </h4>
                <p className="text-xs font-semibold text-red-700">
                  {broker.role}
                </p>
                {broker.note && (
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {broker.note}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200/60 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Contato:</span>
                  <a
                    href={`tel:+55${COMPANY_INFO.phoneRaw}`}
                    className="font-bold text-slate-900 hover:text-red-700 transition-colors"
                  >
                    {broker.phone || COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">E-mail:</span>
                  <span className="text-slate-500 italic text-[11px]">
                    {broker.email || 'Individual em breve'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

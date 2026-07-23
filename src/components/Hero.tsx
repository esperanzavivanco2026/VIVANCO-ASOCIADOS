import React from 'react';
import { ShieldCheck, MessageSquare, ArrowRight, Award, CheckCircle2, PhoneCall, Scale } from 'lucide-react';
import { FIRM_DETAILS, generateWhatsAppLink } from '../data/legalData';

interface HeroProps {
  onOpenConsultationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#0A192F] overflow-hidden">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_law_firm_1784849669129.jpg"
          alt="Vivanco & Asociados Law Firm"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/90 to-[#081226]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C5A059]/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#112240]/90 border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold uppercase tracking-wider shadow-lg">
              <Scale className="w-4 h-4 text-[#C5A059]" />
              <span>VIVANCO & ASOCIADOS — FIRMA JURÍDICA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-100 leading-tight">
              Soluciones Legales con <span className="text-gold-gradient">Integridad</span>, Firmeza y <span className="text-gold-gradient">Éxito</span>
            </h1>

            {/* Quote / Motto Section */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#112240]/90 border-l-4 border-[#C5A059] shadow-xl backdrop-blur-md space-y-1">
              <p className="text-[#E5C378] font-serif italic text-base sm:text-lg font-semibold tracking-wide">
                "{FIRM_DETAILS.motto}"
              </p>
              <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
                — {FIRM_DETAILS.leadAttorney}
              </p>
            </div>

            {/* Subtitle Body */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Patrocinio judicial técnico y asesoría preventiva integral. Protegemos su patrimonio, familia y derechos laborales con la mayor firmeza, confidencialidad y ética jurídica en todo el Ecuador.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href={generateWhatsAppLink('Hola Abogada Esperanza Vivanco, le escribo desde la web para solicitar asesoría legal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-bold text-[#081226] bg-gradient-to-r from-[#C5A059] via-[#E5C378] to-[#B8860B] rounded-lg shadow-xl hover:shadow-2xl hover:brightness-110 transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-[#081226]" />
                <span>Consulta Inmediata por WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#081226] group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenConsultationModal}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-[#112240]/90 hover:bg-[#112240] border border-[#C5A059]/40 hover:border-[#C5A059] rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#C5A059]" />
                <span>Agendar Cita Presencial / Virtual</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Atención Personalizada 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Patrocinio Judicial Nacional</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Confidencialidad Absoluta</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Card Spotlight */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl p-1 bg-gradient-to-b from-[#C5A059]/60 via-[#112240]/50 to-[#081226]/80 shadow-2xl">
              <div className="bg-[#081226]/95 rounded-xl p-6 sm:p-8 space-y-6 border border-slate-800">
                
                {/* Attorney Card Header */}
                <div className="flex items-center space-x-4 pb-4 border-b border-slate-800">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#C5A059] shadow-lg shrink-0">
                    <img
                      src="/src/assets/images/abogada_esperanza_1784849721967.jpg"
                      alt="Ab. Esperanza Vivanco"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-slate-100">
                      {FIRM_DETAILS.leadAttorney}
                    </h3>
                    <p className="text-xs text-[#C5A059] font-medium uppercase tracking-wider">
                      Abogada Directora & Patrocinadora
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Celular / WA: {FIRM_DETAILS.phoneDisplay}
                    </p>
                  </div>
                </div>

                {/* Quick Highlights */}
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-[#112240] border border-slate-800 flex items-start space-x-3">
                    <Award className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-200">Experiencia Proprobada</p>
                      <p className="text-slate-400">Más de 12 años liderando causas civiles, laborales, familiares y penales con éxito.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#112240] border border-slate-800 flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-200">Garantía Procesal</p>
                      <p className="text-slate-400">Seguimiento digital directo en el sistema judicial SATJE e informes periódicos.</p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Box */}
                <div className="pt-2">
                  <a
                    href={`tel:${FIRM_DETAILS.phoneRaw}`}
                    className="w-full py-3 px-4 rounded-lg bg-[#112240] hover:bg-[#1a335c] border border-[#C5A059]/50 text-[#C5A059] font-semibold text-xs flex items-center justify-center space-x-2 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Llamar Directamente: {FIRM_DETAILS.phoneDisplay}</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#112240]/90 border border-[#C5A059]/30 shadow-2xl backdrop-blur-md">
          <div className="text-center p-2">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#C5A059]">
              {FIRM_DETAILS.experienceYears}
            </span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Años de Experiencia
            </span>
          </div>

          <div className="text-center p-2 border-l border-slate-800">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#C5A059]">
              {FIRM_DETAILS.casesWonRate}
            </span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Casos Resueltos
            </span>
          </div>

          <div className="text-center p-2 border-l border-slate-800">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#C5A059]">
              {FIRM_DETAILS.casesHandled}
            </span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Clientes Atendidos
            </span>
          </div>

          <div className="text-center p-2 border-l border-slate-800">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#C5A059]">
              100%
            </span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Transparencia y Ética
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

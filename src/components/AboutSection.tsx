import React from 'react';
import { Award, CheckCircle, Phone, Mail, MessageSquare, BookOpen, Compass, Shield, Target } from 'lucide-react';
import { FIRM_DETAILS, generateWhatsAppLink } from '../data/legalData';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-[#081226] relative overflow-hidden border-t border-b border-slate-800">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#112240] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Perfil Profesional & Dirección Jurídica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
            Ab. Esperanza Vivanco
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Directora Fundadora de Vivanco & Asociados. Abogada especialista con vocación de servicio, rigor procesal y defensa férrea de sus patrocinados.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#C5A059]/40 via-[#112240] to-[#B8860B]/30 opacity-70 blur-md" />
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C5A059]/60 shadow-2xl bg-[#081226]">
                <img
                  src="/src/assets/images/abogada_esperanza_1784849721967.jpg"
                  alt="Ab. Esperanza Vivanco"
                  className="w-full h-auto object-cover object-center max-h-[520px] filter brightness-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Motto Banner */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#081226] via-[#081226]/90 to-transparent p-6 text-center space-y-1">
                  <p className="text-xs uppercase font-semibold text-[#C5A059] tracking-widest">
                    Lema de Ejercicio Jurídico
                  </p>
                  <p className="text-base font-serif italic text-slate-100 font-bold">
                    "{FIRM_DETAILS.motto}"
                  </p>
                  <p className="text-[11px] text-slate-400 font-sans uppercase">
                    — Ab. Esperanza Vivanco
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography & Principles Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <h3 className="text-2xl font-serif font-bold text-slate-100 flex items-center space-x-2">
                <span>Compromiso Inquebrantable con la Justicia</span>
              </h3>
              
              <p>
                Con una amplia trayectoria procesal en el libre ejercicio del derecho en el Ecuador, la <strong className="text-slate-100 font-semibold">Ab. Esperanza Vivanco</strong> ha consolidado a <strong className="text-[#C5A059]">VIVANCO & ASOCIADOS</strong> como un referente de soluciones legales caracterizado por la rapidez, la precisión conceptual y el trato humano impecable.
              </p>

              <p>
                Cada causa legal es asumida no solo como un expediente judicial, sino como una responsabilidad de vida que requiere <span className="text-slate-100 font-medium">estrategia técnica, disciplina rigurosa y determinación insoslayable</span> para garantizar resultados favorables.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-[#112240] border border-slate-800 hover:border-[#C5A059]/50 transition-colors">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="p-2 rounded-lg bg-[#C5A059]/10 text-[#C5A059]">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-slate-100 text-base">Decisión</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Acción legal oportuna y clara. Respuestas estratégicas inmediatas sin dilaciones procesales.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#112240] border border-slate-800 hover:border-[#C5A059]/50 transition-colors">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="p-2 rounded-lg bg-[#C5A059]/10 text-[#C5A059]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-slate-100 text-base">Disciplina</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Rigurosa investigación de doctrina, jurisprudencia y preparación exhaustiva de cada audiencia.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#112240] border border-slate-800 hover:border-[#C5A059]/50 transition-colors">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="p-2 rounded-lg bg-[#C5A059]/10 text-[#C5A059]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-slate-100 text-base">Ética & Lealtad</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Transparencia radical en costos, pronóstico real del caso y estricta confidencialidad profesional.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#112240] border border-slate-800 hover:border-[#C5A059]/50 transition-colors">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="p-2 rounded-lg bg-[#C5A059]/10 text-[#C5A059]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-slate-100 text-base">Fe & Confianza</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Acompañamiento humano continuo para transmitir certidumbre y paz en los momentos más complejos.
                </p>
              </div>

            </div>

            {/* Direct Contact Card inside About */}
            <div className="pt-4 p-5 rounded-xl bg-[#112240]/90 border border-[#C5A059]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs text-[#C5A059] font-semibold uppercase tracking-wider">
                  Atención Directa y Personalizada
                </p>
                <p className="text-sm font-medium text-slate-200">
                  ¿Desea consultar su caso directamente con la Abogada?
                </p>
                <div className="flex items-center space-x-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center space-x-1">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{FIRM_DETAILS.phoneDisplay}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{FIRM_DETAILS.email}</span>
                  </span>
                </div>
              </div>

              <a
                href={generateWhatsAppLink(`Hola Abogada Esperanza Vivanco, deseo una consulta directa con usted.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#B8860B] text-[#081226] font-bold text-xs flex items-center space-x-2 shrink-0 hover:brightness-110 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

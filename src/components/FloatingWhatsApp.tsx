import React, { useState } from 'react';
import { MessageSquare, X, Send, Scale, Shield, Sparkles } from 'lucide-react';
import { FIRM_DETAILS, generateWhatsAppLink } from '../data/legalData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickTopics = [
    { label: 'Derecho de Familia (Divorcio/Alimentos)', text: 'Hola Ab. Esperanza Vivanco, necesito asesoría en un tema de Derecho de Familia y Niñez.' },
    { label: 'Derecho Civil y Contratos', text: 'Hola Ab. Esperanza Vivanco, requiero apoyo en un caso Civil / Contrato / Deuda.' },
    { label: 'Derecho Laboral y Despidos', text: 'Hola Ab. Esperanza Vivanco, necesito consultar sobre una situación Laboral / Liquidación.' },
    { label: 'Derecho Penal y Urgencia', text: 'Hola Ab. Esperanza Vivanco, requiero atención legal URGENTE en materia Penal.' },
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    window.open(generateWhatsAppLink(customMsg), '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Interactive Chat Popup Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 rounded-2xl bg-[#112240] border border-[#C5A059]/60 shadow-2xl overflow-hidden animate-fadeIn space-y-0">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#081226] via-[#112240] to-[#081226] p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full border border-[#C5A059] overflow-hidden shrink-0">
                <img
                  src="/src/assets/images/abogada_esperanza_1784849721967.jpg"
                  alt="Ab. Esperanza Vivanco"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#081226]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-slate-100 text-sm">
                  {FIRM_DETAILS.leadAttorney}
                </h4>
                <p className="text-[10px] text-[#C5A059] font-semibold uppercase tracking-wider">
                  En línea | Cel. {FIRM_DETAILS.phoneDisplay}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-100 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#081226]/80 space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-[#081226] border border-slate-800 text-slate-200 space-y-1.5">
              <p className="font-semibold text-[#C5A059]">
                ¡Hola! Bienvenida/o a Vivanco & Asociados.
              </p>
              <p className="text-[11px] text-slate-300">
                ¿En qué área legal necesita nuestra asistencia hoy?
              </p>
              <p className="text-[10px] italic text-[#E5C378]">
                "{FIRM_DETAILS.motto}"
              </p>
            </div>

            {/* Quick Topic Buttons */}
            <div className="space-y-1.5">
              <p className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                Seleccione un tema de consulta rápida:
              </p>
              {quickTopics.map((topic, i) => (
                <a
                  key={i}
                  href={generateWhatsAppLink(topic.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full p-2.5 rounded-lg bg-[#081226] hover:bg-[#112240] border border-slate-800 hover:border-[#C5A059]/50 text-slate-200 text-left transition-colors font-medium text-[11px]"
                >
                  • {topic.label}
                </a>
              ))}
            </div>

            {/* Custom Input Form */}
            <form onSubmit={handleSendCustom} className="pt-2 flex items-center space-x-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Escriba su mensaje..."
                className="flex-1 px-3 py-2 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#B8860B] text-[#081226] font-bold hover:brightness-110"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Footer Note */}
          <div className="bg-[#081226] px-4 py-2 text-[10px] text-center text-slate-500 border-t border-slate-800">
            Respuesta prioritaria en menos de 15 minutos
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-gradient-to-r from-[#C5A059] via-[#E5C378] to-[#B8860B] text-[#081226] font-bold shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-[#081226] cursor-pointer flex items-center justify-center"
        aria-label="Abrir chat WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-[#081226]"></span>
        </span>

        <MessageSquare className="w-7 h-7 text-[#081226]" />
      </button>

    </div>
  );
};

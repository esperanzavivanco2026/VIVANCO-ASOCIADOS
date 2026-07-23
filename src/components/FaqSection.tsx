import React, { useState } from 'react';
import { FAQS } from '../data/legalData';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from 'lucide-react';
import { FIRM_DETAILS, generateWhatsAppLink } from '../data/legalData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [query, setQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="preguntas" className="py-20 bg-[#0A192F] relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#112240] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Despeje sus Dudas Legales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Respuestas oportunas a las inquietudes más comunes sobre contratación, patrocinio judicial y modalidades de consulta.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar pregunta frecuente..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#112240] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#112240] border border-slate-800 transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none cursor-pointer group"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-slate-100 group-hover:text-[#C5A059] transition-colors">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-md bg-[#081226] border border-slate-800 text-[#C5A059]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed bg-[#081226]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#112240] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-serif font-bold text-slate-100 text-base">
              ¿Tiene una consulta específica que no consta aquí?
            </h4>
            <p className="text-xs text-slate-400">
              Escríbanos directamente por WhatsApp para recibir atención personalizada e inmediata.
            </p>
          </div>

          <a
            href={generateWhatsAppLink('Hola Ab. Esperanza Vivanco, tengo una inquietud legal particular.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#B8860B] text-[#081226] font-bold text-xs flex items-center space-x-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar por WhatsApp (0988468843)</span>
          </a>
        </div>

      </div>
    </section>
  );
};

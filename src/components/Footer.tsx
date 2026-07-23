import React from 'react';
import { Scale, Phone, Mail, MapPin, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { FIRM_DETAILS, generateWhatsAppLink } from '../data/legalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#081226] text-slate-400 text-xs border-t border-slate-800 relative overflow-hidden">
      
      {/* Top Gold Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-[#112240] border border-[#C5A059]/50 flex items-center justify-center">
                <Scale className="w-6 h-6 text-[#C5A059]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-slate-100 tracking-wider">
                  VIVANCO & ASOCIADOS
                </span>
                <span className="text-[10px] font-sans font-medium tracking-widest text-[#C5A059] uppercase -mt-1">
                  Soluciones Legales
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Firma jurídica comprometida con el patrocinio judicial técnico, ético e integral. Soluciones efectivas con el liderazgo de la Ab. Esperanza Vivanco.
            </p>

            <div className="p-3 rounded-lg bg-[#112240] border-l-2 border-[#C5A059] text-[11px] text-[#E5C378] italic">
              "{FIRM_DETAILS.motto}"
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-slate-100 uppercase tracking-wider text-[#C5A059]">
              Áreas de Práctica
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#servicios" className="hover:text-[#C5A059] transition-colors">
                  • Derecho de Familia, Niñez y Divorcios
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#C5A059] transition-colors">
                  • Derecho Civil, Contratos y Deudas
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#C5A059] transition-colors">
                  • Derecho Laboral y Vistos Buenos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#C5A059] transition-colors">
                  • Derecho Penal y Defensa Técnica
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#C5A059] transition-colors">
                  • Trámites Notariales y Escrituras
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#C5A059] transition-colors">
                  • Mediación y Blindaje Preventivo
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact Summary */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-slate-100 uppercase tracking-wider text-[#C5A059]">
              Contacto Inmediato
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <a
                href={`tel:${FIRM_DETAILS.phoneRaw}`}
                className="flex items-center space-x-2 hover:text-[#C5A059] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>{FIRM_DETAILS.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${FIRM_DETAILS.email}`}
                className="flex items-center space-x-2 hover:text-[#C5A059] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>{FIRM_DETAILS.email}</span>
              </a>

              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Cobertura en Todo el Ecuador</span>
              </div>

              <div className="pt-2">
                <a
                  href={generateWhatsAppLink('Hola Ab. Esperanza Vivanco, le contacto desde la web.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#112240] border border-[#C5A059]/40 text-[#C5A059] font-bold text-xs hover:bg-[#C5A059] hover:text-[#081226] transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Guarantee & Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-slate-100 uppercase tracking-wider text-[#C5A059]">
              Garantía & Confidencialidad
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Toda la información suministrada a través de nuestros canales de contacto se encuentra amparada por el secreto profesional establecido en la Ley Orgánica de la Función Judicial del Ecuador.
            </p>
            <div className="flex items-center space-x-2 text-[#C5A059] font-semibold text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>Ejercicios con Máximo Rigor Ético</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} VIVANCO & ASOCIADOS - Ab. Esperanza Vivanco. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-1">
            <span>Diseño & Soluciones Legales para el Ecuador</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

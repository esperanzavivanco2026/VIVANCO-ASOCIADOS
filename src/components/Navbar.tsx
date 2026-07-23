import React, { useState, useEffect } from 'react';
import { Scale, Phone, Mail, MessageSquare, Menu, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { FIRM_DETAILS, generateWhatsAppLink } from '../data/legalData';

interface NavbarProps {
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Ab. Esperanza Vivanco', href: '#nosotros' },
    { label: 'Portafolio de Servicios', href: '#servicios' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Preguntas Frecuentes', href: '#preguntas' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Contact Strip */}
      <div className="bg-[#081226] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="flex items-center space-x-2 hover:text-[#C5A059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{FIRM_DETAILS.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${FIRM_DETAILS.email}`}
              className="flex items-center space-x-2 hover:text-[#C5A059] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{FIRM_DETAILS.email}</span>
            </a>
            <span className="flex items-center space-x-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{FIRM_DETAILS.cobertura}</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#C5A059] font-semibold text-[11px] uppercase tracking-wider">
              Soluciones Legales e Integridad
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#081226]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#C5A059]/25'
            : 'bg-gradient-to-b from-[#081226]/95 to-[#0A192F]/90 backdrop-blur-sm py-4 border-b border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#081226] to-[#112240] border border-[#C5A059]/50 flex items-center justify-center shadow-lg group-hover:border-[#C5A059] transition-colors">
              <Scale className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-serif font-bold tracking-wider text-slate-100 group-hover:text-[#C5A059] transition-colors">
                VIVANCO & ASOCIADOS
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-widest text-[#C5A059] uppercase -mt-1">
                Soluciones Legales
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-200 hover:text-[#C5A059] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenConsultationModal}
              className="px-4 py-2 text-xs font-semibold text-[#C5A059] bg-[#112240]/90 border border-[#C5A059]/40 rounded-md hover:border-[#C5A059] hover:bg-[#112240] transition-all duration-200 cursor-pointer"
            >
              Agendar Consulta
            </button>

            <a
              href={generateWhatsAppLink('Hola Ab. Esperanza Vivanco, requiero asistencia legal urgente.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-[#081226] bg-gradient-to-r from-[#C5A059] via-[#E5C378] to-[#B8860B] rounded-md shadow-md hover:shadow-xl hover:brightness-110 transition-all duration-200 flex items-center space-x-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#081226]" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-300 hover:text-[#C5A059] hover:bg-[#112240] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#081226] border-b border-[#C5A059]/30 px-4 pt-3 pb-6 space-y-3 mt-2">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-slate-200 hover:text-[#C5A059] hover:bg-[#112240] rounded-md text-sm font-medium flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-2.5 text-xs font-semibold text-center text-[#C5A059] bg-[#112240] border border-[#C5A059]/50 rounded-md"
              >
                Agendar Consulta Legal
              </button>

              <a
                href={generateWhatsAppLink('Hola Ab. Esperanza Vivanco, deseo realizar una consulta legal.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-xs font-bold text-center text-[#081226] bg-gradient-to-r from-[#C5A059] to-[#B8860B] rounded-md flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contactar por WhatsApp (0988468843)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

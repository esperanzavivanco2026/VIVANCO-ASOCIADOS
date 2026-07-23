import React, { useState } from 'react';
import { LEGAL_SERVICES, generateWhatsAppLink } from '../data/legalData';
import { ServiceItem } from '../types';
import { 
  Users, 
  FileText, 
  Briefcase, 
  ShieldAlert, 
  FileCheck, 
  Scale, 
  Search, 
  CheckCircle, 
  MessageSquare, 
  ArrowRight, 
  X,
  Calculator,
  ChevronRight
} from 'lucide-react';

interface ServicesPortfolioProps {
  onOpenConsultationModal: (selectedServiceId?: string) => void;
}

export const ServicesPortfolio: React.FC<ServicesPortfolioProps> = ({ onOpenConsultationModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos los Servicios' },
    { id: 'familia', label: 'Familia & Niñez' },
    { id: 'civil', label: 'Civil & Propiedad' },
    { id: 'laboral', label: 'Laboral & Empresa' },
    { id: 'penal', label: 'Penal & Defensa' },
    { id: 'notarial', label: 'Notarial & Trámites' },
    { id: 'preventivo', label: 'Mediación & Preventivo' },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-6 h-6 text-[#C5A059]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#C5A059]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#C5A059]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#C5A059]" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-[#C5A059]" />;
      default: return <Scale className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  const filteredServices = LEGAL_SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'todos' || service.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      service.title.toLowerCase().includes(query) ||
      service.shortDescription.toLowerCase().includes(query) ||
      service.fullDescription.toLowerCase().includes(query) ||
      service.benefits.some(b => b.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="servicios" className="py-20 bg-[#0A192F] relative overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#C5A059]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#112240] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Especialidades Legales Integrales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
            Portafolio de Soluciones Legales
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Ofrecemos patrocinio judicial de alto nivel y asesoría jurídica especializada en las principales ramas del derecho ecuatoriano.
          </p>
        </div>

        {/* Search & Category Filter Control Bar */}
        <div className="space-y-6 mb-12">
          
          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar servicio legal (ej. divorcio, alimentos, despido, contrato, juicio)..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#112240]/90 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-[#C5A059] transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#C5A059] to-[#B8860B] text-[#081226] shadow-lg font-bold'
                    : 'bg-[#112240] text-slate-300 border border-slate-800 hover:border-[#C5A059]/40 hover:text-[#C5A059]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 p-8 rounded-2xl bg-[#112240]/60 border border-slate-800 max-w-lg mx-auto">
            <Search className="w-10 h-10 text-[#C5A059] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-serif font-bold text-slate-200">No encontramos coincidencias directas</h3>
            <p className="text-xs text-slate-400 mt-1">
              Intente con otra palabra clave o contáctenos directamente para consultar su asunto específico.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todos');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#C5A059] bg-[#081226] border border-[#C5A059]/40 rounded-lg hover:bg-[#112240] transition-colors"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#112240] border border-slate-800 p-6 flex flex-col justify-between hover:border-[#C5A059]/60 hover:shadow-2xl transition-all duration-300"
              >
                {/* Highlight Badge */}
                {service.featured && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30 uppercase tracking-wider">
                    Destacado
                  </span>
                )}

                <div>
                  {/* Category Label & Icon */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-xl bg-[#081226] border border-slate-800 group-hover:border-[#C5A059]/50 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-[#C5A059] uppercase tracking-wider block">
                        {service.categoryLabel}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-[#C5A059] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Bullet Benefits Preview */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-slate-300 hover:text-[#C5A059] flex items-center space-x-1 transition-colors cursor-pointer"
                  >
                    <span>Ver Detalle Procesal</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </button>

                  <a
                    href={generateWhatsAppLink(`Hola Ab. Esperanza Vivanco, deseo consultar sobre el servicio de: ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-[#081226] hover:bg-[#C5A059] hover:text-[#081226] text-[#C5A059] border border-[#C5A059]/40 text-xs font-bold transition-all duration-200 flex items-center space-x-1.5 shrink-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Global Action Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#112240] via-[#081226] to-[#112240] border border-[#C5A059]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-serif font-bold text-slate-100 flex items-center justify-center md:justify-start space-x-2">
              <Calculator className="w-5 h-5 text-[#C5A059]" />
              <span>¿Requiere una evaluación personalizada de su caso legal?</span>
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Agende una consulta previa con la Ab. Esperanza Vivanco para revisar sus documentos, analizar el estado procesal y establecer una estrategia clara.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => onOpenConsultationModal()}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#B8860B] text-[#081226] font-bold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer flex items-center space-x-2"
            >
              <span>Agendar Cita de Diagnóstico Legal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081226]/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#112240] border border-[#C5A059]/50 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-100 rounded-full bg-[#081226] border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start space-x-4 border-b border-slate-800 pb-4">
              <div className="p-3 rounded-xl bg-[#081226] border border-[#C5A059]/40 shrink-0">
                {getIcon(activeModalService.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                  {activeModalService.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 mt-0.5">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p className="bg-[#081226]/60 p-4 rounded-xl border border-slate-800">
                {activeModalService.fullDescription}
              </p>

              <div>
                <h4 className="font-serif font-bold text-slate-100 text-sm mb-2 text-[#C5A059]">
                  Beneficios y Alcance Legal Incluido:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalService.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-2 bg-[#081226] p-2.5 rounded-lg border border-slate-800">
                      <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-slate-100 text-sm mb-2 text-[#C5A059]">
                  Fases Procesales Clave:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalService.keyActions.map((action, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-md bg-[#081226] text-slate-300 border border-slate-800 text-xs font-medium">
                      {i + 1}. {action}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => {
                  const sId = activeModalService.id;
                  setActiveModalService(null);
                  onOpenConsultationModal(sId);
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#081226] border border-[#C5A059]/40 text-[#C5A059] hover:bg-[#112240] font-semibold text-xs"
              >
                Agendar Consulta de este Servicio
              </button>

              <a
                href={generateWhatsAppLink(`Hola Ab. Esperanza Vivanco, le escribo para hacer una consulta sobre: ${activeModalService.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#B8860B] text-[#081226] font-bold text-xs flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar por WhatsApp Ahora</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

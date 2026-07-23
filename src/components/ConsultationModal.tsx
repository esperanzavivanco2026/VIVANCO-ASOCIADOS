import React, { useState } from 'react';
import { X, MessageSquare, Scale, Calendar, Clock, CheckCircle2, Phone, AlertCircle } from 'lucide-react';
import { FIRM_DETAILS, LEGAL_SERVICES, generateWhatsAppLink } from '../data/legalData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [legalArea, setLegalArea] = useState(initialServiceId || 'derecho-familia');
  const [format, setFormat] = useState<'presencial' | 'virtual'>('presencial');
  const [urgency, setUrgency] = useState<'inmediata' | 'normal'>('inmediata');
  const [caseSummary, setCaseSummary] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedServiceObj = LEGAL_SERVICES.find(s => s.id === legalArea);
    const serviceTitle = selectedServiceObj ? selectedServiceObj.title : legalArea;

    const message = `SOLICITUD DE CONSULTA LEGAL:
• Cliente: ${fullName || 'No especificado'}
• Teléfono: ${phone || 'No especificado'}
• Área Legal: ${serviceTitle}
• Modalidad: ${format === 'presencial' ? 'Presencial en Oficina' : 'Virtual (Zoom/Google Meet)'}
• Urgencia: ${urgency === 'inmediata' ? 'Atención Inmediata / Prioritaria' : 'Atención Normal'}
• Detalle del Caso: ${caseSummary || 'Sin detalle adicional'}

Hola Abogada Esperanza Vivanco, le envío los datos de mi consulta para confirmar fecha y hora.`;

    window.open(generateWhatsAppLink(message), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081226]/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#112240] border border-[#C5A059]/60 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-100 rounded-full bg-[#081226] border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSendWhatsApp} className="space-y-5">
            
            {/* Header */}
            <div className="space-y-1.5 border-b border-slate-800 pb-4">
              <div className="inline-flex items-center space-x-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>Agendamiento Directo con Ab. Esperanza Vivanco</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
                Agendar Consulta Jurídica
              </h3>
              <p className="text-xs text-slate-400">
                Complete los datos para generar el ticket de cita y conectarse directamente por WhatsApp.
              </p>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. Ing. Carlos Mendoza"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Celular / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. 0991234567"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Área o Servicio Legal Requerido
                </label>
                <select
                  value={legalArea}
                  onChange={(e) => setLegalArea(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                >
                  {LEGAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Format Radio */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormat('presencial')}
                  className={`p-3 rounded-lg border text-left text-xs font-semibold transition-all ${
                    format === 'presencial'
                      ? 'bg-[#081226] border-[#C5A059] text-[#C5A059]'
                      : 'bg-[#081226]/50 border-slate-800 text-slate-400'
                  }`}
                >
                  <Calendar className="w-4 h-4 mb-1 text-[#C5A059]" />
                  <span>Cita Presencial</span>
                  <span className="block text-[10px] font-normal text-slate-400">En Oficina Jurídica</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('virtual')}
                  className={`p-3 rounded-lg border text-left text-xs font-semibold transition-all ${
                    format === 'virtual'
                      ? 'bg-[#081226] border-[#C5A059] text-[#C5A059]'
                      : 'bg-[#081226]/50 border-slate-800 text-slate-400'
                  }`}
                >
                  <Clock className="w-4 h-4 mb-1 text-[#C5A059]" />
                  <span>Consulta Virtual</span>
                  <span className="block text-[10px] font-normal text-slate-400">Vía Zoom / Meet</span>
                </button>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nivel de Urgencia
                </label>
                <div className="flex space-x-3">
                  <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="radio"
                      name="urgency"
                      checked={urgency === 'inmediata'}
                      onChange={() => setUrgency('inmediata')}
                      className="accent-[#C5A059]"
                    />
                    <span>Atención Urgente / Inmediata</span>
                  </label>
                  <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="radio"
                      name="urgency"
                      checked={urgency === 'normal'}
                      onChange={() => setUrgency('normal')}
                      className="accent-[#C5A059]"
                    />
                    <span>Atención Regular</span>
                  </label>
                </div>
              </div>

              {/* Case Summary */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Breve Resumen de su Situación Legal
                </label>
                <textarea
                  rows={3}
                  value={caseSummary}
                  onChange={(e) => setCaseSummary(e.target.value)}
                  placeholder="Escriba brevemente sobre qué se trata su asunto (ej. citación judicial, cobro de pagaré, acuerdo de alimentos, etc.)"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                />
              </div>

            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#E5C378] to-[#B8860B] text-[#081226] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:brightness-110 shadow-xl transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#081226]" />
                <span>Enviar Solicitud por WhatsApp a la Abogada</span>
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Conexión segura e inmediata con la Ab. Esperanza Vivanco ({FIRM_DETAILS.phoneDisplay})
              </p>
            </div>

          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-100">
              ¡Solicitud Generada con Éxito!
            </h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Se ha abiero su conversación de WhatsApp con la <strong className="text-[#C5A059]">Ab. Esperanza Vivanco</strong>. Si por algún motivo su navegador bloqueó la ventana, utilice el siguiente botón:
            </p>

            <a
              href={generateWhatsAppLink(`Hola Ab. Esperanza Vivanco, deseo confirmar mi cita legal con los datos ingresados.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#B8860B] text-[#081226] font-bold text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Abrir Chat de WhatsApp</span>
            </a>

            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-slate-400 hover:text-slate-200 underline"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

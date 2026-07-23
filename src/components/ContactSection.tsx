import React, { useState } from 'react';
import { FIRM_DETAILS, generateWhatsAppLink } from '../data/legalData';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, Scale } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    legalArea: 'Derecho de Familia y Niñez',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email'>('whatsapp');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (sendMethod === 'whatsapp') {
      const text = `NUEVO MENSAJE DESDE LA WEB:
• Nombre: ${formData.fullName}
• Teléfono: ${formData.phone}
• Correo: ${formData.email || 'No proporcionado'}
• Asunto Legal: ${formData.legalArea}
• Mensaje: ${formData.message}

Hola Abogada Esperanza Vivanco, solicito asesoría legal sobre este tema.`;

      window.open(generateWhatsAppLink(text), '_blank');
      setSubmitted(true);
    } else {
      // Direct mailto trigger
      const mailtoUrl = `mailto:${FIRM_DETAILS.email}?subject=${encodeURIComponent(`Consulta Legal Web: ${formData.legalArea}`)}&body=${encodeURIComponent(
        `Nombre: ${formData.fullName}\nTeléfono: ${formData.phone}\nCorreo: ${formData.email}\nÁrea: ${formData.legalArea}\n\nMensaje:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-[#081226] relative overflow-hidden border-t border-slate-800">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#112240] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Atención Personalizada e Inmediata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
            Formulario de Contacto Legal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Póngase en contacto con la Ab. Esperanza Vivanco. Responderemos a su solicitud con total reserva, rapidez y criterio técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Office Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#112240] border border-[#C5A059]/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              <div className="border-b border-slate-800 pb-4 space-y-1">
                <h3 className="text-xl font-serif font-bold text-slate-100">
                  {FIRM_DETAILS.name}
                </h3>
                <p className="text-xs font-semibold text-[#C5A059] tracking-wider uppercase">
                  {FIRM_DETAILS.subName}
                </p>
                <p className="text-xs text-slate-400">
                  Directora: <strong className="text-slate-200">{FIRM_DETAILS.leadAttorney}</strong>
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4">
                
                {/* Phone & WA */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#081226] border border-slate-800 text-[#C5A059] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase">Teléfono / WhatsApp</span>
                    <a
                      href={`tel:${FIRM_DETAILS.phoneRaw}`}
                      className="block text-base font-serif font-bold text-slate-100 hover:text-[#C5A059] transition-colors"
                    >
                      {FIRM_DETAILS.phoneDisplay}
                    </a>
                    <a
                      href={generateWhatsAppLink('Hola Abogada Esperanza Vivanco, le escribo desde el formulario de contacto.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-[#C5A059] hover:underline font-medium mt-0.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Iniciar chat de WhatsApp inmediato</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#081226] border border-slate-800 text-[#C5A059] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase">Correo Electrónico</span>
                    <a
                      href={`mailto:${FIRM_DETAILS.email}`}
                      className="block text-sm font-semibold text-slate-100 hover:text-[#C5A059] transition-colors break-all"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                    <span className="text-[11px] text-slate-400">Atención de requerimientos formales</span>
                  </div>
                </div>

                {/* Address & Coverage */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#081226] border border-slate-800 text-[#C5A059] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase">Ubicación y Cobertura</span>
                    <p className="text-xs text-slate-200 mt-0.5">
                      {FIRM_DETAILS.cobertura}
                    </p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#081226] border border-slate-800 text-[#C5A059] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase">Horarios de Atención</span>
                    <p className="text-xs text-slate-200 mt-0.5">
                      {FIRM_DETAILS.schedule}
                    </p>
                  </div>
                </div>

              </div>

              {/* Motto Quote */}
              <div className="p-4 rounded-xl bg-[#081226] border-l-2 border-[#C5A059] text-xs text-[#E5C378] italic">
                "{FIRM_DETAILS.motto}"
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#112240] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1 border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-serif font-bold text-slate-100">
                      Envíenos un Mensaje Directo
                    </h3>
                    <p className="text-xs text-slate-400">
                      Seleccione su vía de envío preferida (WhatsApp o Correo Electrónico).
                    </p>
                  </div>

                  {/* Send Method Toggle */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSendMethod('whatsapp')}
                      className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                        sendMethod === 'whatsapp'
                          ? 'bg-[#081226] border-[#C5A059] text-[#C5A059] shadow-lg'
                          : 'bg-[#081226]/40 border-slate-800 text-slate-400'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enviar por WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSendMethod('email')}
                      className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                        sendMethod === 'email'
                          ? 'bg-[#081226] border-[#C5A059] text-[#C5A059] shadow-lg'
                          : 'bg-[#081226]/40 border-slate-800 text-slate-400'
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                      <span>Enviar por Email</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Nombres y Apellidos *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej. Abg. / Ing. Juan Pérez"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Número de Celular *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej. 0988468843"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Materia Legal
                      </label>
                      <select
                        value={formData.legalArea}
                        onChange={(e) => setFormData({ ...formData, legalArea: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="Derecho de Familia y Niñez">Derecho de Familia y Niñez</option>
                        <option value="Derecho Civil y Contratos">Derecho Civil y Contratos</option>
                        <option value="Derecho Laboral y Empresarial">Derecho Laboral y Empresarial</option>
                        <option value="Derecho Penal y Defensa Judicial">Derecho Penal y Defensa Judicial</option>
                        <option value="Trámites Notariales y Registrales">Trámites Notariales y Registrales</option>
                        <option value="Asesoría Legal Preventiva y Mediación">Asesoría Legal Preventiva y Mediación</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Descripción de su Caso Legal *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describa brevemente los hechos, la urgencia y lo que necesita lograr..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#E5C378] to-[#B8860B] text-[#081226] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:brightness-110 shadow-xl transition-all cursor-pointer"
                  >
                    {sendMethod === 'whatsapp' ? (
                      <>
                        <MessageSquare className="w-4 h-4 text-[#081226]" />
                        <span>Enviar Consulta Directa por WhatsApp</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#081226]" />
                        <span>Enviar Consulta por Correo Electrónico</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Sus datos están protegidos por el secreto profesional y confidencialidad abogada-cliente.</span>
                  </div>

                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-100">
                    ¡Mensaje Transmitido con Éxito!
                  </h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Agradecemos su contacto. La <strong className="text-[#C5A059]">Ab. Esperanza Vivanco</strong> revisará los antecedentes planteados y se comunicará a la brevedad posible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-[#081226] border border-slate-800 text-xs font-semibold text-[#C5A059]"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

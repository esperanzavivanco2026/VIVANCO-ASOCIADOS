import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/legalData';
import { Testimonial } from '../types';
import { Star, Quote, CheckCircle2, MessageSquarePlus, ShieldCheck, X } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [showReviewForm, setShowReviewForm] = useState(false);

  // New review form states
  const [clientName, setClientName] = useState('');
  const [roleOrCity, setRoleOrCity] = useState('');
  const [serviceCategory, setServiceCategory] = useState('Derecho de Familia');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [submittedReview, setSubmittedReview] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !comment) return;

    const newTestimonial: Testimonial = {
      id: `review-${Date.now()}`,
      clientName,
      roleOrCity: roleOrCity || 'Ecuador',
      serviceCategory,
      comment,
      rating,
      date: 'Reciente',
      verified: true
    };

    setTestimonialsList([newTestimonial, ...testimonialsList]);
    setSubmittedReview(true);
    setTimeout(() => {
      setSubmittedReview(false);
      setShowReviewForm(false);
      setClientName('');
      setRoleOrCity('');
      setComment('');
    }, 2000);
  };

  return (
    <section id="testimonios" className="py-20 bg-[#081226] relative overflow-hidden border-t border-b border-slate-800">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#112240] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Casos de Éxito & Opiniones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
            Testimonios de Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            La confianza de nuestros patrocinados es nuestro mayor respaldo legal. Conozca las experiencias de personas y empresas que confiaron en la Ab. Esperanza Vivanco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsList.map((t) => (
            <div
              key={t.id}
              className="bg-[#112240] border border-slate-800 hover:border-[#C5A059]/50 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl relative group transition-all duration-300"
            >
              {/* Quote Icon Background */}
              <Quote className="absolute top-4 right-4 w-10 h-10 text-slate-800 group-hover:text-[#C5A059]/20 transition-colors pointer-events-none" />

              <div className="space-y-3">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-slate-100 text-sm flex items-center space-x-1.5">
                    <span>{t.clientName}</span>
                    {t.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" title="Cliente Verificado" />
                    )}
                  </h4>
                  <p className="text-[11px] text-slate-400">{t.roleOrCity}</p>
                </div>

                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-[#081226] border border-slate-800 text-[#C5A059]">
                  {t.serviceCategory}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Leave Review CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowReviewForm(true)}
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#112240] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] text-xs font-bold transition-all cursor-pointer shadow-lg"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>¿Es cliente de la firma? Comparta su Testimonio</span>
          </button>
        </div>

      </div>

      {/* Review Submission Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081226]/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#112240] border border-[#C5A059]/60 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            
            <button
              onClick={() => setShowReviewForm(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-100 rounded-full bg-[#081226] border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {!submittedReview ? (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div className="space-y-1 border-b border-slate-800 pb-3">
                  <h3 className="text-lg font-serif font-bold text-slate-100">
                    Escribir Testimonio
                  </h3>
                  <p className="text-xs text-slate-400">
                    Su testimonio ayuda a otros ciudadanos a tomar la mejor decisión legal.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre o Título</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ej. Ing. Patricia Reyes"
                    className="w-full px-3 py-2 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Ciudad o Cargo</label>
                  <input
                    type="text"
                    value={roleOrCity}
                    onChange={(e) => setRoleOrCity(e.target.value)}
                    placeholder="Ej. Quito / Empresa Contable"
                    className="w-full px-3 py-2 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Área Atendida</label>
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Derecho de Familia">Derecho de Familia</option>
                    <option value="Derecho Civil">Derecho Civil y Propiedad</option>
                    <option value="Derecho Laboral">Derecho Laboral</option>
                    <option value="Derecho Penal">Derecho Penal</option>
                    <option value="Trámites Notariales">Trámites Notariales</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Calificación (Estrellas)</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 focus:outline-none"
                      >
                        <Star className={`w-6 h-6 ${star <= rating ? 'fill-[#C5A059] text-[#C5A059]' : 'text-slate-700'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Su Experiencia / Comentario</label>
                  <textarea
                    rows={3}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describa cómo le ayudó la Ab. Esperanza Vivanco en su proceso..."
                    className="w-full px-3 py-2 rounded-lg bg-[#081226] border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#B8860B] text-[#081226] font-bold text-xs uppercase tracking-wider"
                >
                  Publicar Testimonio
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-2">
                <CheckCircle2 className="w-12 h-12 text-[#C5A059] mx-auto" />
                <h4 className="font-serif font-bold text-slate-100 text-lg">¡Testimonio Publicado!</h4>
                <p className="text-xs text-slate-300">Gracias por compartir su experiencia con Vivanco & Asociados.</p>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesPortfolio } from './components/ServicesPortfolio';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  const handleOpenConsultationModal = (serviceId?: string) => {
    setSelectedServiceForModal(serviceId);
    setConsultationModalOpen(true);
  };

  const handleCloseConsultationModal = () => {
    setConsultationModalOpen(false);
    setSelectedServiceForModal(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-[#d4af37] selection:text-slate-950">
      
      {/* Header Navigation */}
      <Navbar onOpenConsultationModal={() => handleOpenConsultationModal()} />

      {/* Hero Section */}
      <main>
        <Hero onOpenConsultationModal={() => handleOpenConsultationModal()} />

        {/* About Ab. Esperanza Vivanco */}
        <AboutSection />

        {/* Services Portfolio */}
        <ServicesPortfolio onOpenConsultationModal={(serviceId) => handleOpenConsultationModal(serviceId)} />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* FAQs */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button & Drawer */}
      <FloatingWhatsApp />

      {/* Interactive Appointment / Fee Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={handleCloseConsultationModal}
        initialServiceId={selectedServiceForModal}
      />

    </div>
  );
}

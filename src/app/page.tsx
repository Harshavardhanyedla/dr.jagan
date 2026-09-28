"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { AboutSection } from "@/components/AboutSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { PatientJourneySection } from "@/components/PatientJourneySection";
import { AppointmentBookingSection } from "@/components/AppointmentBookingSection";
import { AppointmentBookingModal } from "@/components/AppointmentBookingModal";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PatientResourcesSection } from "@/components/PatientResourcesSection";
import { FaqSection } from "@/components/FaqSection";
import { ClinicLocationSection } from "@/components/ClinicLocationSection";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { Footer } from "@/components/Footer";
import { FloatingQuickContact } from "@/components/FloatingQuickContact";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>("");

  const handleOpenBooking = (treatment?: string) => {
    if (treatment) {
      setSelectedTreatmentForBooking(treatment);
    } else {
      setSelectedTreatmentForBooking("");
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedTreatmentForBooking("");
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#fbfcfd] dark:bg-[#060b13] transition-colors duration-200 overflow-x-hidden w-full max-w-full">
      {/* Sticky Blurred Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sections */}
      <Hero onOpenBooking={() => handleOpenBooking()} />
      <TrustStrip />
      <AboutSection onOpenBooking={() => handleOpenBooking()} />
      <TreatmentsSection onOpenBookingWithTreatment={(t) => handleOpenBooking(t)} />
      <WhyChooseSection />
      <ExpertiseSection />
      <FacilitiesSection />
      <PatientJourneySection onOpenBooking={() => handleOpenBooking()} />
      <AppointmentBookingSection />
      <TestimonialsSection />
      <PatientResourcesSection />
      <FaqSection onOpenBooking={() => handleOpenBooking()} />
      <ClinicLocationSection />
      <ContactCtaSection onOpenBooking={() => handleOpenBooking()} />

      {/* Global Footer */}
      <Footer />

      {/* Floating Sticky Actions for Mobile & Desktop */}
      <FloatingQuickContact onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Popup Modal */}
      <AppointmentBookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        preselectedTreatment={selectedTreatmentForBooking}
      />
    </main>
  );
}

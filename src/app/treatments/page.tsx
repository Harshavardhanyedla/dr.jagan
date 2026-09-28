"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { PatientJourneySection } from "@/components/PatientJourneySection";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { Footer } from "@/components/Footer";
import { AppointmentBookingModal } from "@/components/AppointmentBookingModal";
import { FloatingQuickContact } from "@/components/FloatingQuickContact";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TreatmentsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("");

  const handleBook = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#fbfcfd] dark:bg-[#060b13]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Breadcrumb Header */}
      <section className="pt-32 pb-12 bg-slate-100/70 dark:bg-[#0a1120] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 dark:text-white font-medium">Treatments</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Medical Treatments
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base max-w-2xl">
            Evidence-based therapeutic pathways, precision diagnostics, and compassionate clinical care.
          </p>
        </div>
      </section>

      <TreatmentsSection onOpenBookingWithTreatment={handleBook} />
      <PatientJourneySection onOpenBooking={() => setIsBookingOpen(true)} />
      <ContactCtaSection onOpenBooking={() => setIsBookingOpen(true)} />

      <Footer />
      <FloatingQuickContact onOpenBooking={() => setIsBookingOpen(true)} />
      <AppointmentBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTreatment={selectedTreatment}
      />
    </main>
  );
}

"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ClinicLocationSection } from "@/components/ClinicLocationSection";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { Footer } from "@/components/Footer";
import { FloatingQuickContact } from "@/components/FloatingQuickContact";
import { AppointmentBookingModal } from "@/components/AppointmentBookingModal";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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
            <span className="text-slate-900 dark:text-white font-medium">Contact</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact & Location Details
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base max-w-2xl">
            Reach out to our clinical reception, schedule consultations, or find map directions to our suites.
          </p>
        </div>
      </section>

      <ClinicLocationSection />
      <ContactCtaSection onOpenBooking={() => setIsBookingOpen(true)} />
      <Footer />
      <FloatingQuickContact onOpenBooking={() => setIsBookingOpen(true)} />
      <AppointmentBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}

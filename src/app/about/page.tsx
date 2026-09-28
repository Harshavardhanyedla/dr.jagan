"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { Footer } from "@/components/Footer";
import { AppointmentBookingModal } from "@/components/AppointmentBookingModal";
import { FloatingQuickContact } from "@/components/FloatingQuickContact";
import { doctorConfig } from "@/config/doctor";
import Link from "next/link";
import { ChevronRight, Award } from "lucide-react";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#fbfcfd] dark:bg-[#060b13]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Page Breadcrumb & Header */}
      <section className="pt-32 pb-12 bg-slate-100/70 dark:bg-[#0a1120] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 dark:text-white font-medium">About Dr. Jagan</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About {doctorConfig.personal.name}
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base max-w-2xl">
            {doctorConfig.personal.specialization} — Career background, credentials, and medical philosophy.
          </p>
        </div>
      </section>

      <AboutSection onOpenBooking={() => setIsBookingOpen(true)} />
      <WhyChooseSection />
      <ContactCtaSection onOpenBooking={() => setIsBookingOpen(true)} />

      <Footer />
      <FloatingQuickContact onOpenBooking={() => setIsBookingOpen(true)} />
      <AppointmentBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}

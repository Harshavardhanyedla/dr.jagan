"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { AppointmentBookingSection } from "@/components/AppointmentBookingSection";
import { ClinicLocationSection } from "@/components/ClinicLocationSection";
import { Footer } from "@/components/Footer";
import { FloatingQuickContact } from "@/components/FloatingQuickContact";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BookingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fbfcfd] dark:bg-[#060b13]">
      <Navbar />

      {/* Breadcrumb Header */}
      <section className="pt-32 pb-8 bg-slate-100/70 dark:bg-[#0a1120] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 dark:text-white font-medium">Book Appointment</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Schedule Your Consultation
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-300 text-sm">
            Select your preferred time slot for an in-clinic or online tele-health visit.
          </p>
        </div>
      </section>

      <AppointmentBookingSection />
      <ClinicLocationSection />
      <Footer />
      <FloatingQuickContact onOpenBooking={() => {}} />
    </main>
  );
}

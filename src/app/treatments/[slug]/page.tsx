"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { doctorConfig } from "@/config/doctor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppointmentBookingModal } from "@/components/AppointmentBookingModal";
import { FloatingQuickContact } from "@/components/FloatingQuickContact";
import {
  ChevronRight,
  Stethoscope,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function TreatmentDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const treatment = doctorConfig.treatments.find((t) => t.slug === slug);

  if (!treatment) {
    return (
      <main className="min-h-screen flex flex-col justify-between bg-[#fbfcfd] dark:bg-[#060b13]">
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
        <div className="max-w-xl mx-auto py-40 text-center px-4">
          <h2 className="text-2xl font-bold">Treatment Not Found</h2>
          <p className="mt-2 text-slate-500 text-sm">
            The requested clinical protocol could not be located.
          </p>
          <Link
            href="/treatments"
            className="inline-block mt-4 px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold"
          >
            Browse All Treatments
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#fbfcfd] dark:bg-[#060b13]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Breadcrumb Header */}
      <section className="pt-32 pb-12 bg-slate-100/70 dark:bg-[#0a1120] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/treatments" className="hover:text-teal-600 transition-colors">
              Treatments
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 dark:text-white font-medium truncate">
              {treatment.title}
            </span>
          </nav>

          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 mb-3">
            {treatment.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {treatment.title}
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base max-w-2xl leading-relaxed">
            {treatment.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Treatment Details */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Clinical Overview & Pathology
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {treatment.fullDesc}
                </p>
              </div>

              {/* Symptoms */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1524] border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>Common Symptoms & Clinical Indicators</span>
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                  {treatment.symptoms.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diagnostic & Therapeutic Protocol */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-900/40">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-900 dark:text-teal-200 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>Diagnostic Methodology</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {treatment.diagnosticMethods.map((m, i) => (
                      <li key={i}>• {m}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>Therapeutic Care Pathway</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {treatment.treatmentApproach.map((a, i) => (
                      <li key={i}>• {a}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recovery Milestone */}
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <span>{treatment.recoveryExpectations}</span>
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 p-6 rounded-3xl bg-white dark:bg-[#0c1524] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
                <span className="text-xs font-semibold uppercase text-teal-600 dark:text-teal-400">
                  Consultation
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Consult Dr. Jagan for this condition
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  In-clinic or online telemedicine appointment with personalized clinical evaluation.
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Fee:</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {doctorConfig.personal.consultationFee}
                  </span>
                </div>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book for this Treatment</span>
                </button>

                <p className="text-[10px] text-center text-slate-400">
                  No advance payment required for in-clinic visit booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingQuickContact onOpenBooking={() => setIsBookingOpen(true)} />
      <AppointmentBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTreatment={treatment.title}
      />
    </main>
  );
}

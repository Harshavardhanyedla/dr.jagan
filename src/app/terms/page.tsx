import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { doctorConfig } from "@/config/doctor";
import Link from "next/link";
import { ChevronRight, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fbfcfd] dark:bg-[#060b13]">
      <Navbar />

      <section className="pt-32 pb-10 bg-slate-100/70 dark:bg-[#0a1120] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 dark:text-white font-medium">Terms & Medical Disclaimer</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Terms of Service & Medical Disclaimer
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            Terms of Use for {doctorConfig.personal.name} Practice Portal
          </p>
        </div>
      </section>

      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-6">
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200">
          <div className="flex items-center gap-2 font-bold mb-1">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>CRITICAL MEDICAL NOTICE</span>
          </div>
          <p className="text-xs sm:text-sm">
            {doctorConfig.disclaimer}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            1. Nature of Website Information
          </h2>
          <p>
            The content, health articles, checklists, and treatment overviews presented on this website are designed for educational reference only. They do not constitute formal medical diagnosis or establish an enforceable doctor-patient relationship until an in-person or verified telemedicine clinical consultation is formally completed.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            2. Emergency Circumstances
          </h2>
          <p>
            This website and its online inquiry form are NOT monitored for acute medical emergencies. If you are experiencing chest pain, acute respiratory distress, severe trauma, or any life-threatening symptoms, please call local emergency services (108/112) or visit the nearest hospital emergency department immediately.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            3. Appointment Rescheduling & Cancellations
          </h2>
          <p>
            Please notify the clinic desk at least 4 hours in advance if you require rescheduling of your allocated slot, so that awaiting patients may be accommodated.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

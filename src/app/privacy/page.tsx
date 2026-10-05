import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { doctorConfig } from "@/config/doctor";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
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
            <span className="text-slate-900 dark:text-white font-medium">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            Last updated: September 2026 • Medical Patient Confidentiality Notice
          </p>
        </div>
      </section>

      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            1. Commitment to Health Data Privacy
          </h2>
          <p>
            At {doctorConfig.clinic.name}, safeguarding the confidentiality and integrity of your sensitive personal health information is our sacred obligation. Any medical records, lab findings, or contact details provided through this website or during consultations are handled in strict compliance with applicable clinical privacy laws.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            2. Information We Collect
          </h2>
          <p>
            When submitting an appointment inquiry, we collect your name, phone number, preferred appointment timings, and optional notes concerning your health symptoms. We do not sell, rent, or trade your personal or health data to third-party advertisers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            3. Use of Information
          </h2>
          <p>
            Collected details are solely utilized to confirm consultation schedules, provide necessary clinical pre-appointment guidance, process legitimate insurance or diagnostic requisitions, and maintain your private health record.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            4. Security Standards
          </h2>
          <p>
            All electronic transmission of patient requests is encrypted. Access to patient records is strictly restricted to Dr. Jagan and authorized clinic care coordinators.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

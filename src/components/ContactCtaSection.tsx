"use client";

import React from "react";
import { doctorConfig } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import {
  Calendar,
  Phone,
  MessageCircle,
  Clock,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface ContactCtaSectionProps {
  onOpenBooking: () => void;
}

export const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({
  onOpenBooking,
}) => {
  const { t } = useLanguage();

  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Jagan's clinic, I would like to schedule a consultation.`
  );

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0a1628] to-slate-950 text-white">
      {/* Subtle Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-teal-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Take Charge of Your Well-being</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          Ready to Take the Next Step?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Schedule your comprehensive consultation with{" "}
          <strong className="text-white font-semibold">{doctorConfig.personal.name}</strong>.
          Personalized assessment, clear communication, and compassionate care.
        </p>

        {/* Action Buttons Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-xl shadow-teal-500/20 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>{t.bookAppointment}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <a
            href={`tel:${doctorConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-colors"
          >
            <Phone className="w-4 h-4 text-teal-300" />
            <span>{t.callNow}</span>
          </a>

          <a
            href={`https://wa.me/${doctorConfig.contact.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base shadow-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.whatsappNow}</span>
          </a>
        </div>

        {/* Contact Info Footer Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-400">
          <div className="flex flex-col items-center">
            <span className="text-slate-500 uppercase font-semibold mb-1">Direct Clinic Phone</span>
            <span className="text-white font-bold text-sm">{doctorConfig.contact.displayPhone}</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-slate-500 uppercase font-semibold mb-1">Clinic Desk Timings</span>
            <span className="text-white font-medium">Mon - Sat: 09:00 AM – 08:30 PM</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-slate-500 uppercase font-semibold mb-1">Consultation Location</span>
            <span className="text-white font-medium">{doctorConfig.clinic.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

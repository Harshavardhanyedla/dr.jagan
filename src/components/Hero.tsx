"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { doctorConfig } from "@/config/doctor";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  Users,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  const scrollToTreatments = () => {
    const el = document.getElementById("treatments");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-[#060b13] dark:via-[#091120] dark:to-[#060b13]"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/60 text-teal-800 dark:text-teal-300 text-xs sm:text-sm font-semibold shadow-xs max-w-full">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
              <span className="whitespace-nowrap">{t.trustedMedicalCare}</span>
              <span className="hidden sm:inline text-teal-400 dark:text-teal-600">|</span>
              <span className="hidden sm:inline text-slate-500 dark:text-slate-400 font-medium truncate max-w-xs">
                {doctorConfig.clinic.name}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              <span>{t.heroHeadingLine1}</span>
              <span className="block mt-1 bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-600 dark:from-teal-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                {t.heroHeadingLine2}
              </span>
            </h1>

            {/* Doctor Intro Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Meet{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">
                {doctorConfig.personal.name}
              </strong>{" "}
              —{" "}
              <span className="text-teal-700 dark:text-teal-300 font-medium">
                {doctorConfig.personal.specialization}
              </span>{" "}
              providing evidence-based, compassionate care with a patient-first approach.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-md shadow-teal-600/25 hover:shadow-lg hover:shadow-teal-600/30 transition-all duration-200 active:scale-98 group cursor-pointer text-base"
              >
                <Calendar className="w-5 h-5 text-teal-100 group-hover:scale-110 transition-transform" />
                <span>{t.bookAppointment}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToTreatments}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors text-base"
              >
                <span>{t.exploreTreatments}</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full grid grid-cols-3 gap-4 max-w-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  <span>{doctorConfig.personal.experienceYears}</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {t.yearsExperience}
                </span>
              </div>

              <div className="flex flex-col border-l border-slate-200 dark:border-slate-800 pl-4">
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  <span>{doctorConfig.personal.patientsCount}</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {t.patientsTreated}
                </span>
              </div>

              <div className="flex flex-col border-l border-slate-200 dark:border-slate-800 pl-4">
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  <span>{doctorConfig.treatments.length}+</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {t.specializationsCount}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Doctor Portrait Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Geometric layered frames and ambient glow */}
            <div className="relative w-full max-w-md">
              {/* Outer decorative backdrop border */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-teal-500/20 via-blue-500/10 to-teal-500/15 blur-xl -z-10" />

              {/* Main Photo Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/60 shadow-2xl aspect-[3/4] group">
                <Image
                  src={doctorConfig.personal.avatarUrl}
                  alt={doctorConfig.personal.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
                  sizes="(max-width: 768px) 100vw, 500px"
                />

                {/* Subtle gradient vignette at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-xs font-medium mb-1.5">
                    <Award className="w-3.5 h-3.5 text-teal-400" />
                    <span>{doctorConfig.personal.qualifications[0]}</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {doctorConfig.personal.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium truncate">
                    {doctorConfig.personal.specialization}
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Live Status "Accepting Appointments" */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-200/80 dark:border-slate-700/80 animate-float-gentle flex items-center gap-3">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Live Schedule</span>
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {t.acceptingAppointments}
                  </span>
                </div>
              </div>

              {/* Floating Card 2: "Personalized Patient Care" */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-200/80 dark:border-slate-700/80 animate-float-delayed flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {t.personalizedCare}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Evidence-Based Clinical Protocol
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { doctorConfig } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import {
  CalendarCheck,
  Stethoscope,
  Activity,
  Sparkles,
  HeartPulse,
  ArrowRight,
  Compass,
} from "lucide-react";

interface PatientJourneySectionProps {
  onOpenBooking: () => void;
}

export const PatientJourneySection: React.FC<PatientJourneySectionProps> = ({
  onOpenBooking,
}) => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    CalendarCheck,
    Stethoscope,
    Activity,
    Sparkles,
    HeartPulse,
  };

  return (
    <section id="journey" className="py-20 lg:py-28 bg-slate-50/70 dark:bg-[#060b13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Step-by-Step Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.patientJourneyHeading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A structured, transparent roadmap from your initial inquiry to sustainable health recovery.
          </p>
        </div>

        {/* 5 Steps Linear Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {doctorConfig.patientJourney.map((stepItem, idx) => {
            const Icon = iconMap[stepItem.icon] || CalendarCheck;
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0c1524] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all group"
              >
                {/* Step Index & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-teal-600 dark:text-teal-400">
                      {stepItem.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    {stepItem.subtitle}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {/* Arrow indicator between steps on desktop */}
                {idx < doctorConfig.patientJourney.length - 1 && (
                  <div className="hidden md:flex justify-end pt-4 text-slate-300 dark:text-slate-700">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>Begin Your Health Journey — Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

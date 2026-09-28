"use client";

import React from "react";
import Image from "next/image";
import { doctorConfig } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import {
  Home,
  Activity,
  CheckCircle2,
  ClipboardCheck,
  Video,
  BookOpen,
  Building2,
  Sparkles,
} from "lucide-react";

export const FacilitiesSection: React.FC = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    Home,
    Activity,
    CheckCircle2,
    ClipboardCheck,
    Video,
    BookOpen,
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white dark:bg-[#070d18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Modern Clinical Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.facilitiesHeading}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              A serene clinical environment designed for patient privacy, calm discussions, and prompt diagnostic evaluations.
            </p>
          </div>
        </div>

        {/* Feature Hero Banner: Clinic Photography Showcase */}
        <div className="relative rounded-3xl overflow-hidden mb-12 border border-slate-200/80 dark:border-slate-800 shadow-xl aspect-[21/9] max-h-[380px] group">
          <Image
            src={doctorConfig.personal.clinicImageUrl}
            alt="Dr. Jagan Consultation Clinic Interior"
            fill
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-teal-300 bg-slate-950/60 px-3 py-1 rounded-full backdrop-blur-md">
                Private Consultation Suite
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2">
                Designed for Unhurried, Confidential Discussions
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                Natural ambient lighting, ergonomic seating, and complete acoustic privacy.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md text-xs font-medium border border-white/20">
              <Sparkles className="w-4 h-4 text-teal-300" />
              <span>Hospital Grade Sanitation</span>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctorConfig.facilities.map((fac, idx) => {
            const Icon = iconMap[fac.icon] || Home;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 dark:bg-[#0c1524] border border-slate-200/80 dark:border-slate-800 hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-all duration-300 group hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {fac.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {fac.description}
                </p>

                <ul className="space-y-1.5 border-t border-slate-200/60 dark:border-slate-800 pt-3">
                  {fac.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-teal-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { doctorConfig } from "@/config/doctor";
import {
  GraduationCap,
  Briefcase,
  Building2,
  HeartHandshake,
  Microscope,
  ShieldCheck,
} from "lucide-react";

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: GraduationCap,
      label: "Recognized Qualifications",
      value: doctorConfig.personal.qualifications[0],
      sub: "Board Certified Specialist",
    },
    {
      icon: Briefcase,
      label: "Clinical Experience",
      value: `${doctorConfig.personal.experienceYears} Years Dedicated Practice`,
      sub: "Supervised Clinical Care",
    },
    {
      icon: Building2,
      label: "Hospital & Practice",
      value: doctorConfig.clinic.name,
      sub: doctorConfig.clinic.hospitalAffiliation,
    },
    {
      icon: HeartHandshake,
      label: "Patient-First Approach",
      value: "Personalized Consultations",
      sub: "Unrushed 1-on-1 Discussions",
    },
    {
      icon: Microscope,
      label: "Advanced Diagnostics",
      value: "Evidence-Based Protocols",
      sub: "Precision Target Markers",
    },
  ];

  return (
    <section className="border-y border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm relative z-20 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Responsive layout: Horizontally scrollable on mobile with snap, grid on desktop */}
        <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-none snap-x snap-mandatory">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-64 md:w-auto snap-center flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/70 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-colors"
              >
                <div className="flex-shrink-0 w-9 h-9 2xl:w-10 2xl:h-10 rounded-lg bg-teal-500/10 dark:bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-[10px] 2xl:text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-1 leading-snug">
                    {item.value}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {item.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

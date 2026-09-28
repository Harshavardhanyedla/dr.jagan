"use client";

import React, { useState } from "react";
import { doctorConfig } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import {
  Scan,
  TrendingUp,
  Stethoscope,
  ShieldAlert,
  Crosshair,
  Laptop,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";

export const ExpertiseSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeExpertise, setActiveExpertise] = useState<number>(0);

  const iconMap: Record<string, React.ElementType> = {
    Scan,
    TrendingUp,
    Stethoscope,
    ShieldAlert,
    Crosshair,
    Laptop,
  };

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-slate-50/70 dark:bg-[#060b13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Clinical Domain Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.expertiseHeading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Specialized clinical expertise spanning diagnostic evaluation, therapeutic interventions, and comprehensive continuity care.
          </p>
        </div>

        {/* Desktop Orbital Interactive Layout (lg+) */}
        <div className="hidden lg:block relative max-w-4xl mx-auto h-[550px] mb-12">
          {/* Subtle Outer Orbital Rings */}
          <div className="absolute inset-0 m-auto w-[480px] h-[480px] rounded-full border border-dashed border-teal-500/25 dark:border-teal-500/20 pointer-events-none animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-0 m-auto w-[320px] h-[320px] rounded-full border border-slate-200 dark:border-slate-800 pointer-events-none" />

          {/* Central Anchor Node: Dr. Jagan */}
          <div className="absolute inset-0 m-auto w-48 h-48 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 text-white shadow-2xl shadow-teal-600/30 flex flex-col items-center justify-center text-center p-4 z-20 border-4 border-white dark:border-[#0c1524]">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">{doctorConfig.personal.name}</span>
            <span className="text-[11px] text-teal-100 font-medium max-w-[140px] truncate">
              Specialist Practice
            </span>
            <span className="mt-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20">
              Center of Care
            </span>
          </div>

          {/* Satellite Expertise Nodes positioned radially */}
          {doctorConfig.expertiseAreas.map((area, index) => {
            const angle = (index * 360) / doctorConfig.expertiseAreas.length;
            const radius = 230; // pixels from center
            const rad = (angle - 90) * (Math.PI / 180);
            const x = Math.round(radius * Math.cos(rad));
            const y = Math.round(radius * Math.sin(rad));

            const Icon = iconMap[area.icon] || Sparkles;
            const isActive = activeExpertise === index;

            return (
              <div
                key={index}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  top: "calc(50% - 44px)",
                  left: "calc(50% - 110px)",
                }}
                onMouseEnter={() => setActiveExpertise(index)}
                className={`absolute w-56 p-3.5 rounded-2xl transition-all duration-300 cursor-pointer z-30 ${
                  isActive
                    ? "bg-white dark:bg-[#0c1524] shadow-xl shadow-teal-500/10 border-2 border-teal-500 scale-105"
                    : "bg-white/90 dark:bg-[#0c1524]/90 shadow-md border border-slate-200 dark:border-slate-800 hover:border-teal-400"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive
                        ? "bg-teal-600 text-white"
                        : "bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {area.name}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                      {area.description}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Expertise Highlight Card (Desktop) */}
        <div className="hidden lg:block max-w-2xl mx-auto p-5 rounded-2xl bg-white dark:bg-[#0c1524] border border-slate-200 dark:border-slate-800 shadow-md text-center">
          <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider block mb-1">
            Active Expertise Focus
          </span>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
            {doctorConfig.expertiseAreas[activeExpertise]?.name}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            {doctorConfig.expertiseAreas[activeExpertise]?.description}
          </p>
        </div>

        {/* Mobile & Tablet Responsive Grid (under lg) */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {doctorConfig.expertiseAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Sparkles;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white dark:bg-[#0c1524] border border-slate-200 dark:border-slate-800 flex items-start gap-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {area.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

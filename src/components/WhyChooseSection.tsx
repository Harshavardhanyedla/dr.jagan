"use client";

import React from "react";
import { doctorConfig } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import {
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Activity,
  HeartHandshake,
  Clock,
  CheckCircle,
} from "lucide-react";

export const WhyChooseSection: React.FC = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Sparkles,
    MessageSquare,
    Activity,
    HeartHandshake,
    Clock,
  };

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#070d18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Editorial Anchor */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Core Clinical Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {t.whyChooseHeading}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Modern medicine is most powerful when matched with deep clinical listening. Dr. Jagan’s practice is built upon six foundational principles that govern every consultation and treatment decision.
            </p>

            {/* Credibility highlights */}
            <div className="mt-8 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 w-full space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>Zero hasty consultations — every case receives dedicated time</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>Full diagnostic transparency before initiating medications</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>Coordinated follow-ups and direct clinical accessibility</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Principles Cards in Asymmetric Polished Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {doctorConfig.principles.map((principle, index) => {
              const Icon = iconMap[principle.icon] || ShieldCheck;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-50/70 dark:bg-[#0c1524] border border-slate-200/80 dark:border-slate-800 hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/5 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {principle.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

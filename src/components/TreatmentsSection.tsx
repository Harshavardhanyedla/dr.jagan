"use client";

import React, { useState } from "react";
import { doctorConfig, TreatmentItem } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import { TreatmentDetailModal } from "./TreatmentDetailModal";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  ShieldCheck,
  FileCheck,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Calendar,
} from "lucide-react";

interface TreatmentsSectionProps {
  onOpenBookingWithTreatment?: (treatment: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onOpenBookingWithTreatment,
}) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalTreatment, setActiveModalTreatment] = useState<TreatmentItem | null>(null);

  // Map icon names to components
  const iconMap: Record<string, React.ElementType> = {
    Stethoscope,
    Activity,
    HeartPulse,
    ShieldCheck,
    FileCheck,
    Sparkles,
  };

  const categories = ["All", ...Array.from(new Set(doctorConfig.treatments.map((t) => t.category)))];

  const filteredTreatments =
    selectedCategory === "All"
      ? doctorConfig.treatments
      : doctorConfig.treatments.filter((t) => t.category === selectedCategory);

  const handleBook = (treatmentName: string) => {
    if (onOpenBookingWithTreatment) {
      onOpenBookingWithTreatment(treatmentName);
    } else {
      const el = document.getElementById("booking");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-slate-50/60 dark:bg-[#060b13] relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Clinical Specializations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Specialized Care for Your Health
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Each clinical pathway is tailored using targeted diagnostics and evidence-based therapeutic protocols.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Showing {filteredTreatments.length} treatments
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-teal-600 text-white shadow-sm shadow-teal-600/30"
                  : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Treatments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => {
            const Icon = iconMap[treatment.iconName] || Stethoscope;
            return (
              <div
                key={treatment.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0c1524] border border-slate-200/80 dark:border-slate-800/80 hover:border-teal-500/50 dark:hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Icon and Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800">
                      {treatment.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {treatment.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {treatment.shortDesc}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalTreatment(treatment)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleBook(treatment.title)}
                    title="Book appointment for this treatment"
                    className="p-2 rounded-lg text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-teal-900/10 via-slate-100 dark:via-slate-800 to-teal-900/10 border border-teal-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              Need assistance determining which clinical consultation matches your symptoms?
            </p>
          </div>
          <button
            onClick={() => handleBook("General Clinical Assessment")}
            className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap"
          >
            Consult with Dr. Jagan
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <TreatmentDetailModal
        treatment={activeModalTreatment}
        onClose={() => setActiveModalTreatment(null)}
        onBookTreatment={handleBook}
      />
    </section>
  );
};

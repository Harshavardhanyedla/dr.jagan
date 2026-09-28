"use client";

import React, { useState } from "react";
import Image from "next/image";
import { doctorConfig } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import {
  GraduationCap,
  Award,
  Globe2,
  Quote,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"journey" | "credentials" | "memberships">("journey");

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-white dark:bg-[#070d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.aboutBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {doctorConfig.about.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Committed to clinical excellence, evidence-based science, and transparent doctor-patient relationships.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Doctor Photo & Quote Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xl aspect-[4/5] group">
              <Image
                src={doctorConfig.personal.avatarUrl}
                alt={`${doctorConfig.personal.name} portrait`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* Bottom Badge Over Image */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-wider text-teal-300 font-semibold">
                  Board Certified Specialist
                </span>
                <h3 className="text-2xl font-bold">{doctorConfig.personal.name}</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Reg No: {doctorConfig.personal.medicalRegistrationNumber}
                </p>
              </div>
            </div>

            {/* Signature Quote Card */}
            <div className="p-6 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60 relative">
              <Quote className="w-8 h-8 text-teal-600/30 dark:text-teal-400/30 absolute top-4 right-4" />
              <p className="italic text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-serif">
                &ldquo;{doctorConfig.about.philosophyQuote}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-teal-200/60 dark:border-teal-800/40 pt-3">
                <span className="text-xs font-semibold text-teal-800 dark:text-teal-300">
                  — {doctorConfig.about.philosophyAuthor}
                </span>
                <span className="text-[11px] text-teal-600/70 dark:text-teal-400/70">
                  (Editable Medical Philosophy)
                </span>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                <Globe2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Languages Spoken</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {doctorConfig.about.languagesSpoken.map((lang, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 shadow-2xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Interactive Timeline */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {/* Introduction paragraphs */}
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {doctorConfig.about.intro.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Interactive Tab Switcher for Credentials / Journey */}
            <div className="border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <button
                onClick={() => setActiveTab("journey")}
                className={`pb-3 text-sm font-semibold transition-colors relative cursor-pointer ${
                  activeTab === "journey"
                    ? "text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                Education & Career Journey
              </button>
              <button
                onClick={() => setActiveTab("credentials")}
                className={`pb-3 text-sm font-semibold transition-colors relative cursor-pointer ${
                  activeTab === "credentials"
                    ? "text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                Qualifications
              </button>
              <button
                onClick={() => setActiveTab("memberships")}
                className={`pb-3 text-sm font-semibold transition-colors relative cursor-pointer ${
                  activeTab === "memberships"
                    ? "text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                Professional Memberships
              </button>
            </div>

            {/* Tab 1: Professional Journey Timeline */}
            {activeTab === "journey" && (
              <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/30 dark:border-teal-500/20 space-y-6 pt-2">
                {doctorConfig.about.careerTimeline.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Node Point */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-teal-600 dark:border-teal-400 group-hover:scale-125 transition-transform" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-teal-700 dark:text-teal-300">
                      {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Qualifications List */}
            {activeTab === "credentials" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {doctorConfig.personal.qualifications.map((qual, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-start gap-3"
                  >
                    <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">
                        {qual}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        Recognized Board & University Certification
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Memberships */}
            {activeTab === "memberships" && (
              <div className="space-y-3 pt-2">
                {doctorConfig.about.memberships.map((mem, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center gap-3"
                  >
                    <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {mem}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-semibold text-sm transition-colors shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation with Dr. Jagan</span>
              </button>

              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                In-Clinic & Virtual Tele-consultations Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { doctorConfig } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Building,
  CheckCircle2,
  Calendar,
  ExternalLink,
} from "lucide-react";

export const ClinicLocationSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentDayName, setCurrentDayName] = useState<string>("");

  useEffect(() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const todayIndex = new Date().getDay();
    setCurrentDayName(days[todayIndex]);
  }, []);

  const fullAddressString = `${doctorConfig.clinic.address.line1}, ${doctorConfig.clinic.address.line2}, ${doctorConfig.clinic.address.area}, ${doctorConfig.clinic.address.city}, ${doctorConfig.clinic.address.state} - ${doctorConfig.clinic.address.pincode}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 dark:bg-[#060b13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Practice Location & Hours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.clinicLocationHeading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Conveniently situated with dedicated valet parking and easy metro accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Clinic Address & Interactive Timings (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Address Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1524] border border-slate-200/80 dark:border-slate-800 shadow-md">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    Primary Outpatient Practice
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {doctorConfig.clinic.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    Affiliated: {doctorConfig.clinic.hospitalAffiliation}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6" />
                </div>
              </div>

              {/* Address details */}
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 py-3 border-y border-slate-100 dark:border-slate-800">
                <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {doctorConfig.clinic.address.line1}, {doctorConfig.clinic.address.line2}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {doctorConfig.clinic.address.area}, {doctorConfig.clinic.address.city}, {doctorConfig.clinic.address.state} - {doctorConfig.clinic.address.pincode}
                  </p>
                  <p className="text-[11px] text-teal-700 dark:text-teal-400 mt-1 font-semibold">
                    Landmark: {doctorConfig.clinic.address.landmark}
                  </p>
                </div>
              </div>

              {/* Direct Contact Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                <a
                  href={`tel:${doctorConfig.contact.phone}`}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200"
                >
                  <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Clinic Desk</span>
                    <span className="font-bold">{doctorConfig.contact.displayPhone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${doctorConfig.contact.whatsapp}?text=Hello%20Clinic`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">WhatsApp Desk</span>
                    <span className="font-bold">{doctorConfig.contact.displayWhatsapp}</span>
                  </div>
                </a>
              </div>

              {/* Direction CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    doctorConfig.clinic.name + " " + fullAddressString
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <a
                  href={`tel:${doctorConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>Call Clinic</span>
                </a>
              </div>
            </div>

            {/* Clinic Weekly Timings Schedule */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1524] border border-slate-200/80 dark:border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Clinic Operating Schedule
                  </h4>
                </div>
                <span className="text-xs font-semibold text-teal-700 dark:text-teal-300 px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800">
                  Today is {currentDayName}
                </span>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {doctorConfig.clinic.timings.map((tItem, idx) => {
                  const isToday = tItem.day.toLowerCase() === currentDayName.toLowerCase();
                  return (
                    <div
                      key={idx}
                      className={`py-3 flex items-center justify-between text-xs sm:text-sm transition-colors rounded-lg px-2 ${
                        isToday
                          ? "bg-teal-50/80 dark:bg-teal-950/50 font-bold text-teal-900 dark:text-teal-200"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && (
                          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        )}
                        <span className="font-medium">{tItem.day}</span>
                        {isToday && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/60 px-1.5 py-0.5 rounded">
                            {t.openToday}
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs">{tItem.hours}</span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-4 text-[11px] text-slate-400 dark:text-slate-500 italic">
                * Note: Emergency consultations outside regular schedule require prior telephonic confirmation with the duty medical officer.
              </p>
            </div>
          </div>

          {/* Right Column: Stylized Visual Map Viewport Placeholder (lg:col-span-5) */}
          <div className="lg:col-span-5 h-full">
            <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative min-h-[460px] flex flex-col justify-between p-6 text-white group">
              {/* Map grid stylized texture */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/90 to-teal-950/50" />

              {/* Pin indicator badge */}
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Interactive Map Preview</span>
                </span>
                <h4 className="text-xl font-bold mt-2">{doctorConfig.clinic.name}</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-xs">
                  {doctorConfig.clinic.address.line1}, {doctorConfig.clinic.address.area}
                </p>
              </div>

              {/* Simulated Map Visual Center Pin */}
              <div className="relative z-10 flex flex-col items-center justify-center my-12">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-20 h-20 rounded-full bg-teal-500/20 animate-ping" />
                  <span className="absolute w-12 h-12 rounded-full bg-teal-500/40" />
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-tr from-teal-500 to-teal-700 text-white flex items-center justify-center shadow-lg border-2 border-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-3 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-bold shadow-xl">
                  {doctorConfig.personal.name} Consultation Suites
                </div>
              </div>

              {/* Map Action Banner */}
              <div className="relative z-10 bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold block">Open in Navigation</span>
                  <span className="text-[11px] text-slate-400">Google Maps / Apple Maps</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    doctorConfig.clinic.name + " " + fullAddressString
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

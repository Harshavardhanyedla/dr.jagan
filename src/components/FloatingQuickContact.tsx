"use client";

import React, { useState, useEffect } from "react";
import { doctorConfig } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import { Phone, MessageCircle, Calendar, ArrowUp, X } from "lucide-react";

interface FloatingQuickContactProps {
  onOpenBooking: () => void;
}

export const FloatingQuickContact: React.FC<FloatingQuickContactProps> = ({
  onOpenBooking,
}) => {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Jagan's clinic, I would like to inquire about booking an appointment.`
  );

  return (
    <>
      {/* Mobile Persistent Bottom Floating Bar (sm:hidden) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#070d18]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`https://wa.me/${doctorConfig.contact.whatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t.whatsappNow}</span>
        </a>

        <a
          href={`tel:${doctorConfig.contact.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-xs"
        >
          <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>{t.callNow}</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-teal-600 text-white font-semibold text-xs shadow-xs"
        >
          <Calendar className="w-4 h-4" />
          <span>Book</span>
        </button>
      </div>

      {/* Desktop Persistent Bottom-Right Quick Control (hidden on mobile, appears upon scroll) */}
      <div
        className={`hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* WhatsApp Pill */}
        <a
          href={`https://wa.me/${doctorConfig.contact.whatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact clinic via WhatsApp"
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-lg hover:shadow-emerald-600/30 transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="hidden md:inline">WhatsApp Dr. Jagan</span>
        </a>

        {/* Floating Quick Book Button */}
        <button
          onClick={onOpenBooking}
          aria-label="Book Consultation"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-xl hover:shadow-teal-600/30 transition-all active:scale-95 cursor-pointer border border-teal-400/30"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Consultation</span>
        </button>
      </div>
    </>
  );
};

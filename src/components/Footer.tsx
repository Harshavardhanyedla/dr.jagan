"use client";

import React from "react";
import Link from "next/link";
import { doctorConfig } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import {
  Stethoscope,
  Phone,
  MessageCircle,
  MapPin,
  ShieldAlert,
  ArrowUp,
} from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info & Specialization (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center shadow-md">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  {doctorConfig.personal.name}
                </span>
                <span className="block text-xs text-teal-400 font-medium">
                  {doctorConfig.personal.specialization}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing patient-centered, evidence-based medical consultations with an unwavering dedication to clinical integrity and compassionate care.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <p>
                <strong className="text-slate-200">Registration:</strong>{" "}
                {doctorConfig.personal.medicalRegistrationNumber}
              </p>
              <p>
                <strong className="text-slate-200">Practice:</strong> {doctorConfig.clinic.name}
              </p>
            </div>

            {/* Social Media Placeholders */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-slate-500 font-medium mr-1">Connect:</span>
              <a
                href="#social-placeholder"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-teal-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a
                href="#social-placeholder"
                aria-label="YouTube Medical Channel"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-teal-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
              </a>
              <a
                href="#social-placeholder"
                aria-label="Twitter / X Profile"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-teal-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="#social-placeholder"
                aria-label="Instagram Medical Updates"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-teal-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#hero" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-teal-400 transition-colors">
                  About Dr. Jagan
                </Link>
              </li>
              <li>
                <Link href="/#treatments" className="hover:text-teal-400 transition-colors">
                  Treatments & Care
                </Link>
              </li>
              <li>
                <Link href="/#expertise" className="hover:text-teal-400 transition-colors">
                  Clinical Expertise
                </Link>
              </li>
              <li>
                <Link href="/#facilities" className="hover:text-teal-400 transition-colors">
                  Facilities & Services
                </Link>
              </li>
              <li>
                <Link href="/#journey" className="hover:text-teal-400 transition-colors">
                  Patient Journey
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinical Treatments List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs">
              {doctorConfig.treatments.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <Link
                    href={`/treatments`}
                    className="hover:text-teal-400 transition-colors line-clamp-1"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Clinic Desk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Clinic Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-2">
                  {doctorConfig.clinic.address.line1}, {doctorConfig.clinic.address.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a
                  href={`tel:${doctorConfig.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {doctorConfig.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${doctorConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {doctorConfig.contact.displayWhatsapp}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/booking"
                  className="inline-block px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Regulatory Disclaimer (Prominently displayed) */}
        <div className="my-8 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-300">Medical Disclaimer: </strong>
            {doctorConfig.disclaimer}
          </p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {doctorConfig.personal.name}. {t.allRightsReserved}
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              {t.privacyPolicy}
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              {t.termsOfService}
            </Link>
            <button
              onClick={scrollToTop}
              className="hover:text-teal-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

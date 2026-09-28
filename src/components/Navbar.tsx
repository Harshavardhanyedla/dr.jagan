"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";
import { doctorConfig } from "@/config/doctor";
import {
  Phone,
  Calendar,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  Stethoscope,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.navHome, href: "/#hero" },
    { label: t.navAbout, href: "/#about" },
    { label: t.navTreatments, href: "/#treatments" },
    { label: t.navExpertise, href: "/#expertise" },
    { label: t.navFacilities, href: "/#facilities" },
    { label: t.navJourney, href: "/#journey" },
    { label: t.navResources, href: "/#resources" },
    { label: t.navFaq, href: "/#faq" },
    { label: t.navContact, href: "/#contact" },
  ];

  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const element = document.getElementById("booking");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#booking";
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-[#070d18]/85 backdrop-blur-md shadow-sm border-b border-slate-200/70 dark:border-slate-800/80 py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1 flex-shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                  {doctorConfig.personal.name}
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500" />
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate max-w-[140px] md:max-w-[180px] lg:max-w-[220px]">
                  {doctorConfig.personal.specialization}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (xl+) */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-2.5 py-1.5 text-xs 2xl:text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 rounded-md transition-colors hover:bg-slate-100/60 dark:hover:bg-slate-800/60 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Action Controls */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === "en" ? "te" : "en")}
                aria-label="Toggle language between English and Telugu"
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200/60 dark:border-slate-700/60 flex-shrink-0 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>{language === "en" ? "తెలుగు" : "EN"}</span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle light and dark mode"
                className="p-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200/60 dark:border-slate-700/60 flex-shrink-0 cursor-pointer"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>

              {/* Call CTA - visible on 2xl to avoid squeezing */}
              <a
                href={`tel:${doctorConfig.contact.phone}`}
                className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700/80 transition-colors whitespace-nowrap flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>{t.callNow}</span>
              </a>

              {/* Primary Book CTA */}
              <button
                onClick={handleBookingClick}
                className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 rounded-lg shadow-sm hover:shadow-teal-500/25 transition-all duration-200 active:scale-95 whitespace-nowrap flex-shrink-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.bookAppointment}</span>
              </button>

              {/* Tablet Hamburger (sm to xl) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
                className="xl:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex-shrink-0 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Controls & Hamburger (< sm) */}
            <div className="flex sm:hidden items-center gap-1.5 flex-shrink-0">
              <button
                onClick={() => setLanguage(language === "en" ? "te" : "en")}
                aria-label="Toggle language"
                className="px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700"
              >
                {language === "en" ? "తెలుగు" : "EN"}
              </button>
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-1.5 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open mobile navigation menu"
                className="p-1.5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/95 dark:bg-[#091120]/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-5 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <button
                onClick={handleBookingClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.bookAppointment}</span>
              </button>
              <a
                href={`tel:${doctorConfig.contact.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>
                  {t.callNow}: {doctorConfig.contact.displayPhone}
                </span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{doctorConfig.clinic.name}</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

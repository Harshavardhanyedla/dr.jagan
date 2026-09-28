"use client";

import React, { useState } from "react";
import { doctorConfig, ResourceArticle } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import {
  BookOpen,
  FileText,
  CheckSquare,
  Download,
  Search,
  Clock,
  ArrowRight,
  ClipboardList,
  HeartHandshake,
  Tag,
  ExternalLink,
} from "lucide-react";

export const PatientResourcesSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"guides" | "checklist" | "downloads">("checklist");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);

  const articles = doctorConfig.resources.filter((art) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.summary.toLowerCase().includes(q) ||
      art.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const downloadableGuides = [
    {
      title: "Patient Consultation Dossier Checklist",
      fileType: "PDF (1.2 MB)",
      description: "A printable 1-page organizer to list your symptoms, medical history, and current medications before visiting.",
    },
    {
      title: "Post-Consultation Medication Guide Template",
      fileType: "PDF (850 KB)",
      description: "Structured table to record your prescribed timings, food interaction guidelines, and follow-up checkpoints.",
    },
    {
      title: "Preventive Health Screening Age Roadmap",
      fileType: "PDF (1.5 MB)",
      description: "General reference guide outlining essential routine lab screens from ages 25 to 65+.",
    },
  ];

  const handleSimulatedDownload = (title: string) => {
    const textContent = `Dr. Jagan Clinical Practice Document: ${title}\nGenerated on: ${new Date().toLocaleDateString()}\nNote: Clinical educational placeholder document.`;
    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${title.replace(/\s+/g, "_")}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resources" className="py-20 lg:py-28 bg-slate-50/70 dark:bg-[#060b13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Empowering Patient Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Patient Resources & Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Preparation guidelines, clinical checklists, educational articles, and downloadable resources.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs">
            <button
              onClick={() => setActiveTab("checklist")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "checklist"
                  ? "bg-teal-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              <span>Before & After Visit</span>
            </button>

            <button
              onClick={() => setActiveTab("guides")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "guides"
                  ? "bg-teal-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Health Articles</span>
            </button>

            <button
              onClick={() => setActiveTab("downloads")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "downloads"
                  ? "bg-teal-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Downloads</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Before & After Appointment Guide */}
        {activeTab === "checklist" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before Appointment Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1524] border border-slate-200/80 dark:border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Before Your Appointment
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    What to prepare for maximum consultation value
                  </span>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span>
                    <strong>Medical Dossier:</strong> Gather prior laboratory investigations, discharge summaries, and radiology reports (arranged chronologically).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span>
                    <strong>Medications List:</strong> Note names and exact dosages of all prescription pills, vitamins, and OTC medications currently being taken.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span>
                    <strong>Symptom Timeline:</strong> When did symptoms first begin, how frequently do they recur, and what aggravates or relieves them?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span>
                    <strong>List Your Questions:</strong> Write down your primary questions in advance so you leave with clarity on all points.
                  </span>
                </li>
              </ul>
            </div>

            {/* After Consultation Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1524] border border-slate-200/80 dark:border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    After Your Consultation
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Continuity care and treatment adherence
                  </span>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>
                    <strong>Prescription Review:</strong> Verify your written e-prescription and dosage instructions before starting newly prescribed therapies.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>
                    <strong>Diagnostic Follow-Ups:</strong> Schedule any recommended laboratory checks or scans in the advised timeframe.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>
                    <strong>Report Sharing:</strong> Upload new reports via WhatsApp or clinic desk for Dr. Jagan’s review.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>
                    <strong>Book Follow-up Date:</strong> Mark your follow-up review slot to measure progress and adjust therapeutic dosages.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: Educational Health Articles */}
        {activeTab === "guides" && (
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Search Box */}
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search health articles, topics, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((art) => (
                <div
                  key={art.id}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#0c1524] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-teal-500/40 hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <span className="font-semibold text-teal-600 dark:text-teal-400">
                        {art.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {art.readTime}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {art.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {art.summary}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {art.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedArticle(art)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 cursor-pointer"
                    >
                      <span>Read Full Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Downloadable Resources */}
        {activeTab === "downloads" && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloadableGuides.map((guide, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#0c1524] border border-slate-200/80 dark:border-slate-800 shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {guide.fileType}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleSimulatedDownload(guide.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-600 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Resource</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
        >
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-[#0c1524] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
              {selectedArticle.category} • {selectedArticle.readTime}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
              {selectedArticle.title}
            </h3>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedArticle.content.map((c, i) => (
                <p key={i}>{c}</p>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-teal-600 text-white text-xs font-semibold"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

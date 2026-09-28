"use client";

import React from "react";
import { AppointmentBookingSection } from "./AppointmentBookingSection";
import { X } from "lucide-react";

interface AppointmentBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatment?: string;
}

export const AppointmentBookingModal: React.FC<AppointmentBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatment,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#0c1524] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-4 sm:p-6 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 z-10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <AppointmentBookingSection
          isModal={true}
          onClose={onClose}
          preselectedTreatment={preselectedTreatment}
        />
      </div>
    </div>
  );
};

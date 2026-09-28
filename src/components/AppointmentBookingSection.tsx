"use client";

import React, { useState, useEffect } from "react";
import { doctorConfig } from "@/config/doctor";
import { useLanguage } from "@/context/language-context";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  Video,
  Building2,
  FileText,
  CheckCircle2,
  Share2,
  Download,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface AppointmentBookingSectionProps {
  preselectedTreatment?: string;
  isModal?: boolean;
  onClose?: () => void;
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  consultationType: "in-clinic" | "online-video";
  reason: string;
  notes: string;
}

interface SubmissionResult {
  referenceId: string;
  data: FormData;
  timestamp: string;
}

export const AppointmentBookingSection: React.FC<AppointmentBookingSectionProps> = ({
  preselectedTreatment,
  isModal = false,
  onClose,
}) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    timeSlot: "",
    consultationType: "in-clinic",
    reason: preselectedTreatment || "",
    notes: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);

  // Set min date to tomorrow
  const [minDateString, setMinDateString] = useState("");
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDateString(tomorrow.toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    if (preselectedTreatment) {
      setFormData((prev) => ({ ...prev, reason: preselectedTreatment }));
    }
  }, [preselectedTreatment]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter a contact number.";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email format.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a consultation date.";
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = "Please choose a preferred time slot.";
    }

    if (!formData.reason.trim()) {
      newErrors.reason = "Please specify a reason or select a treatment category.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate structured processing ready for Supabase / backend API hook
    setTimeout(() => {
      const generatedId = `DJ-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionResult({
        referenceId: generatedId,
        data: formData,
        timestamp: new Date().toLocaleString(),
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleDownloadCalendar = () => {
    if (!submissionResult) return;
    const { data, referenceId } = submissionResult;
    // Generate valid iCalendar (.ics) content
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Dr. Jagan Practice//Appointment Scheduler//EN",
      "BEGIN:VEVENT",
      `SUMMARY:Medical Consultation with ${doctorConfig.personal.name} (${data.consultationType.toUpperCase()})`,
      `DESCRIPTION:Appointment Reference: ${referenceId}\\nPatient: ${data.fullName}\\nReason: ${data.reason}\\nLocation: ${doctorConfig.clinic.name}`,
      `LOCATION:${doctorConfig.clinic.name}, ${doctorConfig.clinic.address.line1}`,
      `STATUS:CONFIRMED`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `Appointment-${referenceId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWhatsAppForward = () => {
    if (!submissionResult) return;
    const { data, referenceId } = submissionResult;
    const message = encodeURIComponent(
      `Hello ${doctorConfig.personal.name}'s Clinic,\nI have submitted an appointment request.\n\n` +
        `• Ref ID: ${referenceId}\n` +
        `• Patient: ${data.fullName}\n` +
        `• Date: ${data.date}\n` +
        `• Time Slot: ${data.timeSlot}\n` +
        `• Mode: ${data.consultationType === "in-clinic" ? "In-Clinic" : "Online Video"}\n` +
        `• Reason: ${data.reason}\n\n` +
        `Kindly confirm my booking.`
    );
    window.open(`https://wa.me/${doctorConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      date: "",
      timeSlot: "",
      consultationType: "in-clinic",
      reason: "",
      notes: "",
    });
    setErrors({});
    setSubmissionResult(null);
  };

  return (
    <div
      id={!isModal ? "booking" : undefined}
      className={`${!isModal ? "py-20 lg:py-28 bg-white dark:bg-[#070d18]" : "p-2"}`}
    >
      <div className={!isModal ? "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" : "w-full"}>
        {!isModal && (
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Direct Scheduling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.appointmentModalTitle}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              {t.appointmentModalSubtitle}
            </p>
          </div>
        )}

        {/* Confirmation Screen */}
        {submissionResult ? (
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0c1524] border border-teal-500/40 shadow-xl text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400">
              Request Received
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-2">
              {t.bookingSuccessTitle}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              {t.bookingSuccessSubtitle} Our clinical desk will contact you to verify and lock in your schedule.
            </p>

            {/* Structured Card Receipt */}
            <div className="mt-6 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-lg mx-auto text-left space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
                <span className="text-xs text-slate-500 dark:text-slate-400">{t.appointmentId}</span>
                <span className="font-mono font-bold text-teal-600 dark:text-teal-400 text-sm">
                  {submissionResult.referenceId}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">Patient Name</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {submissionResult.data.fullName}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">Preferred Slot</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {submissionResult.data.date} at {submissionResult.data.timeSlot}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">Consultation Mode</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize">
                  {submissionResult.data.consultationType === "in-clinic"
                    ? "In-Clinic Consultation"
                    : "Online Video Consultation"}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">Consultation Fee</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {doctorConfig.personal.consultationFee}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppForward}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md"
              >
                <Share2 className="w-4 h-4" />
                <span>{t.sendOnWhatsApp}</span>
              </button>

              <button
                onClick={handleDownloadCalendar}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{t.downloadSummary}</span>
              </button>

              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {t.newBooking}
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Booking Form */
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-slate-50/70 dark:bg-[#0c1524] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6"
          >
            {/* Consultation Mode Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                1. Select Consultation Mode
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, consultationType: "in-clinic" })
                  }
                  className={`p-4 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                    formData.consultationType === "in-clinic"
                      ? "border-teal-500 bg-teal-50/50 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 shadow-xs"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                  }`}
                >
                  <Building2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <div className="text-left">
                    <span className="text-xs sm:text-sm font-bold block">
                      {t.inClinic}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Visit {doctorConfig.clinic.name}
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, consultationType: "online-video" })
                  }
                  className={`p-4 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                    formData.consultationType === "online-video"
                      ? "border-teal-500 bg-teal-50/50 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 shadow-xs"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                  }`}
                >
                  <Video className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <div className="text-left">
                    <span className="text-xs sm:text-sm font-bold block">
                      {t.onlineVideo}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Encrypted HD Video Consultation
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Patient Personal Details */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                2. Patient Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      placeholder={t.fullName}
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      placeholder={t.phoneNumber}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      placeholder={t.emailAddress}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Date & Time Slot Picker */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                3. Preferred Date & Available Time Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
                <div className="sm:col-span-1">
                  <div className="relative">
                    <CalendarIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      min={minDateString}
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  {errors.date && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.date}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Select Time Slot:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      ...doctorConfig.appointmentSlots.morning,
                      ...doctorConfig.appointmentSlots.evening,
                    ].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                          formData.timeSlot === slot
                            ? "bg-teal-600 text-white font-semibold"
                            : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.timeSlot && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.timeSlot}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Reason for Visit & Optional Message */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  4. Reason for Consultation
                </label>
                <select
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">-- Choose Condition / Clinical Specialty --</option>
                  <option value="Initial Consultation & Assessment">
                    Initial Consultation & Assessment
                  </option>
                  {doctorConfig.treatments.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                  <option value="Routine Follow-up & Lab Review">
                    Routine Follow-up & Lab Review
                  </option>
                  <option value="Second Opinion on Existing Medical Diagnosis">
                    Second Opinion on Existing Medical Diagnosis
                  </option>
                  <option value="Preventive Health Screening Evaluation">
                    Preventive Health Screening Evaluation
                  </option>
                </select>
                {errors.reason && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.reason}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder={t.optionalMessage}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Submit Button & Security Note */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <span>Confidential HIPAA-compliant medical inquiry standard</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {isModal && onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Logging Request...</span>
                  ) : (
                    <>
                      <span>{t.confirmAppointment}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

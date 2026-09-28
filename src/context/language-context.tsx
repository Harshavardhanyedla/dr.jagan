"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "te";

interface Translations {
  navHome: string;
  navAbout: string;
  navTreatments: string;
  navExpertise: string;
  navFacilities: string;
  navJourney: string;
  navResources: string;
  navTestimonials: string;
  navFaq: string;
  navContact: string;
  bookAppointment: string;
  callNow: string;
  whatsappNow: string;
  acceptingAppointments: string;
  personalizedCare: string;
  trustedMedicalCare: string;
  heroHeadingLine1: string;
  heroHeadingLine2: string;
  heroHeading: string;
  heroSubtitle: string;
  exploreTreatments: string;
  yearsExperience: string;
  patientsTreated: string;
  specializationsCount: string;
  aboutBadge: string;
  aboutHeading: string;
  aboutSignatureQuote: string;
  readMore: string;
  viewAllTreatments: string;
  whyChooseHeading: string;
  whyChooseSubtitle: string;
  expertiseHeading: string;
  facilitiesHeading: string;
  patientJourneyHeading: string;
  testimonialsHeading: string;
  faqHeading: string;
  clinicLocationHeading: string;
  openToday: string;
  closedToday: string;
  appointmentModalTitle: string;
  appointmentModalSubtitle: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: string;
  inClinic: string;
  onlineVideo: string;
  reasonForVisit: string;
  optionalMessage: string;
  confirmAppointment: string;
  bookingSuccessTitle: string;
  bookingSuccessSubtitle: string;
  appointmentId: string;
  downloadSummary: string;
  sendOnWhatsApp: string;
  newBooking: string;
  medicalDisclaimer: string;
  allRightsReserved: string;
  privacyPolicy: string;
  termsOfService: string;
}

const translations: Record<Language, Translations> = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navTreatments: "Treatments",
    navExpertise: "Expertise",
    navFacilities: "Facilities",
    navJourney: "Journey",
    navResources: "Resources",
    navTestimonials: "Testimonials",
    navFaq: "FAQ",
    navContact: "Contact",
    bookAppointment: "Book an Appointment",
    callNow: "Call Now",
    whatsappNow: "WhatsApp",
    acceptingAppointments: "Accepting Appointments",
    personalizedCare: "Personalized Patient Care",
    trustedMedicalCare: "Trusted Medical Care",
    heroHeadingLine1: "Expert Care.",
    heroHeadingLine2: "Personalized for You.",
    heroHeading: "Expert Care. Personalized for You.",
    heroSubtitle: "Meet Dr. Jagan — providing evidence-based, compassionate care with a patient-first approach.",
    exploreTreatments: "Explore Treatments",
    yearsExperience: "Years Experience",
    patientsTreated: "Patients Cared For",
    specializationsCount: "Specialized Protocols",
    aboutBadge: "About Dr. Jagan",
    aboutHeading: "Medicine with Experience. Care with Purpose.",
    aboutSignatureQuote: "Every patient deserves to be heard, understood and cared for with the highest medical rigor.",
    readMore: "Learn More",
    viewAllTreatments: "View All Treatments",
    whyChooseHeading: "Care Designed Around the Patient",
    whyChooseSubtitle: "Combining clinical precision with genuine human empathy to ensure optimal health outcomes.",
    expertiseHeading: "Areas of Clinical Expertise",
    facilitiesHeading: "Our Facilities & Services",
    patientJourneyHeading: "Your Journey With Dr. Jagan",
    testimonialsHeading: "Patient Experiences & Feedback",
    faqHeading: "Frequently Asked Questions",
    clinicLocationHeading: "Visit the Practice",
    openToday: "Open Today",
    closedToday: "Closed Today",
    appointmentModalTitle: "Book Your Consultation",
    appointmentModalSubtitle: "Select your preferred slot with Dr. Jagan. Our medical desk will confirm promptly.",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    preferredDate: "Preferred Date",
    preferredTime: "Preferred Time Slot",
    consultationType: "Consultation Type",
    inClinic: "In-Clinic Consultation",
    onlineVideo: "Online Video Consultation",
    reasonForVisit: "Reason for Visit",
    optionalMessage: "Additional Notes or Symptoms (Optional)",
    confirmAppointment: "Confirm Appointment Request",
    bookingSuccessTitle: "Appointment Request Received",
    bookingSuccessSubtitle: "Thank you. Your consultation request has been logged successfully.",
    appointmentId: "Appointment Reference ID",
    downloadSummary: "Save Appointment Slip (.ics / Text)",
    sendOnWhatsApp: "Send via WhatsApp",
    newBooking: "Book Another Visit",
    medicalDisclaimer: "Information provided on this website is for general informational purposes and does not replace professional medical advice, diagnosis or treatment.",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
  te: {
    navHome: "హోమ్",
    navAbout: "డాక్టర్ గురించి",
    navTreatments: "చికిత్సలు",
    navExpertise: "ప్రత్యేకతలు",
    navFacilities: "వసతులు",
    navJourney: "వైద్య ప్రయాణం",
    navResources: "సమాచారం",
    navTestimonials: "అభిప్రాయాలు",
    navFaq: "సందేహాలు",
    navContact: "సంప్రదించండి",
    bookAppointment: "అపాయింట్‌మెంట్ బుక్ చేయండి",
    callNow: "కాల్ చేయండి",
    whatsappNow: "వాట్సాప్",
    acceptingAppointments: "అపాయింట్‌మెంట్‌లు అందుబాటులో ఉన్నాయి",
    personalizedCare: "వ్యక్తిగత రోగి సంరక్షణ",
    trustedMedicalCare: "విశ్వసనీయ వైద్య సేవలు",
    heroHeadingLine1: "నిపుణుల వైద్యం.",
    heroHeadingLine2: "మీకు వ్యక్తిగత శ్రద్ధ.",
    heroHeading: "నిపుణుల వైద్యం. మీకు వ్యక్తిగత శ్రద్ధ.",
    heroSubtitle: "డాక్టర్ జగన్‌ను కలవండి — ఆధారిత, దయతో కూడిన మరియు రోగి-కేంద్రీకృత వైద్య సంరక్షణ.",
    exploreTreatments: "చికిత్సల వివరాలు చూడండి",
    yearsExperience: "సంవత్సరాల అనుభవం",
    patientsTreated: "రోగులకు సేవలు",
    specializationsCount: "ప్రత్యేక విభాగాలు",
    aboutBadge: "డాక్టర్ జగన్ గురించి",
    aboutHeading: "అనుభవంతో కూడిన వైద్యం. బాధ్యతతో కూడిన సంరక్షణ.",
    aboutSignatureQuote: "ప్రతి రోగికి వినడం, అర్థం చేసుకోవడం మరియు అత్యున్నత వైద్య ప్రమాణాలతో శ్రద్ధ చూపడం అవసరం.",
    readMore: "మరింత తెలుసుకోండి",
    viewAllTreatments: "అన్ని చికిత్సలను చూడండి",
    whyChooseHeading: "రోగి ప్రాధాన్యతతో కూడిన సంరక్షణ",
    whyChooseSubtitle: "వైద్య ఖచ్చితత్వంతో పాటు మానవతా దృక్పథాన్ని జోడించి సంపూర్ణ ఆరోగ్యం అందించడం.",
    expertiseHeading: "వైద్య నైపుణ్య విభాగాలు",
    facilitiesHeading: "మా వసతులు & సేవలు",
    patientJourneyHeading: "డాక్టర్ జగన్‌తో మీ వైద్య ప్రయాణం",
    testimonialsHeading: "రోగుల అభిప్రాయాలు & అనుభవాలు",
    faqHeading: "తరచుగా అడిగే ప్రశ్నలు",
    clinicLocationHeading: "క్లినిక్ చిరునామా & వివరాలు",
    openToday: "ఈరోజు తెరిచి ఉంది",
    closedToday: "ఈరోజు మూసి ఉంది",
    appointmentModalTitle: "మీ సంప్రదింపులను బుక్ చేసుకోండి",
    appointmentModalSubtitle: "డాక్టర్ జగన్‌తో మీకు అనుకూలమైన సమయాన్ని ఎంచుకోండి. మా సిబ్బంది త్వరగా నిర్ధారిస్తారు.",
    fullName: "పూర్తి పేరు",
    phoneNumber: "ఫోన్ నంబర్",
    emailAddress: "ఇమెయిల్ చిరునామా",
    preferredDate: "కావాల్సిన తేదీ",
    preferredTime: "అనుకూల సమయం",
    consultationType: "సంప్రదింపుల రకం",
    inClinic: "క్లినిక్‌లో ప్రత్యక్ష దర్శనం",
    onlineVideo: "ఆన్‌లైన్ వీడియో కన్సల్టేషన్",
    reasonForVisit: "సమస్య / సందర్శన కారణం",
    optionalMessage: "అదనపు వివరాలు లేదా లక్షణాలు (ఐచ్ఛికం)",
    confirmAppointment: "అపాయింట్‌మెంట్ నిర్ధారించండి",
    bookingSuccessTitle: "అపాయింట్‌మెంట్ అభ్యర్థన స్వీకరించబడింది",
    bookingSuccessSubtitle: "ధన్యవాదాలు. మీ అపాయింట్‌మెంట్ విజయవంతంగా నమోదు చేయబడింది.",
    appointmentId: "అపాయింట్‌మెంట్ రిఫరెన్స్ నంబర్",
    downloadSummary: "అపాయింట్‌మెంట్ రశీదు డౌన్‌లోడ్",
    sendOnWhatsApp: "వాట్సాప్ ద్వారా పంపండి",
    newBooking: "మరొక అపాయింట్‌మెంట్ బుక్ చేయండి",
    medicalDisclaimer: "ఈ వెబ్‌సైట్‌లోని సమాచారం సాధారణ అవగాహన కొరకు మాత్రమే. ఇది వైద్య నిపుణుల సలహా లేదా చికిత్సకు ప్రత్యామ్నాయం కాదు.",
    allRightsReserved: "సర్వ హక్కులు ప్రత్యేకించబడ్డాయి.",
    privacyPolicy: "గోప్యతా విధానం",
    termsOfService: "నిబంధనలు & షరతులు",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("dr_jagan_lang") as Language;
    if (saved === "en" || saved === "te") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("dr_jagan_lang", lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

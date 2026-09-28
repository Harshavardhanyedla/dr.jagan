export interface TreatmentItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  diagnosticMethods: string[];
  treatmentApproach: string[];
  recoveryExpectations: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'consultation' | 'insurance';
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  summary: string;
  content: string[];
  tags: string[];
}

export interface DoctorConfig {
  personal: {
    title: string;
    name: string;
    fullName: string;
    specialization: string;
    subSpecialization: string;
    qualifications: string[];
    experienceYears: string;
    patientsCount: string;
    medicalRegistrationNumber: string;
    consultationFee: string;
    avatarUrl: string;
    clinicImageUrl: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    whatsapp: string;
    displayWhatsapp: string;
    email: string;
    emergencyContact: string;
  };
  clinic: {
    name: string;
    hospitalAffiliation: string;
    tagline: string;
    address: {
      line1: string;
      line2: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      googleMapsUrl: string;
      landmark: string;
    };
    timings: {
      day: string;
      hours: string;
      isOpen: boolean;
      isToday?: boolean;
    }[];
  };
  about: {
    headline: string;
    intro: string[];
    philosophyQuote: string;
    philosophyAuthor: string;
    memberships: string[];
    languagesSpoken: string[];
    careerTimeline: {
      stage: string;
      period: string;
      title: string;
      institution: string;
      description: string;
    }[];
  };
  principles: {
    title: string;
    description: string;
    icon: string;
  }[];
  expertiseAreas: {
    name: string;
    description: string;
    icon: string;
  }[];
  facilities: {
    name: string;
    description: string;
    features: string[];
    icon: string;
  }[];
  treatments: TreatmentItem[];
  testimonials: {
    id: string;
    patientInitial: string;
    verified: boolean;
    date: string;
    treatmentCategory: string;
    rating: number;
    quote: string;
  }[];
  resources: ResourceArticle[];
  faqs: FAQItem[];
  patientJourney: {
    step: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
  }[];
  appointmentSlots: {
    morning: string[];
    afternoon: string[];
    evening: string[];
  };
  disclaimer: string;
}

export const doctorConfig: DoctorConfig = {
  personal: {
    title: "Dr.",
    name: "Dr. Jagan",
    fullName: "Dr. Jagan [Full Medical Name Placeholder]",
    specialization: "[Specialization Placeholder - e.g., Senior Consultant Specialist]",
    subSpecialization: "[Sub-Specialization Placeholder - e.g., Advanced Diagnostic & Clinical Care]",
    qualifications: [
      "[MBBS - Reputed Medical University]",
      "[MD / MS - Premier Medical Institute]",
      "[Fellowship / Board Certification Placeholder]",
      "[Specialist Certification]"
    ],
    experienceYears: "[X]+",
    patientsCount: "[X,XXX]+",
    medicalRegistrationNumber: "[REG-XXXXX-MCI/NMC]",
    consultationFee: "[₹ Consultation Fee]",
    avatarUrl: "/images/dr-jagan.jpg",
    clinicImageUrl: "/images/clinic.jpg",
  },
  contact: {
    phone: "+919550793263",
    displayPhone: "+91 95507 93263",
    whatsapp: "919550793263",
    displayWhatsapp: "+91 95507 93263",
    email: "consult@drjaganclinic.com",
    emergencyContact: "+91 95507 93263 (Emergency / Reception Desk)",
  },
  clinic: {
    name: "[Dr. Jagan Advanced Medical Practice / Clinic Name]",
    hospitalAffiliation: "[Hospital / Medical Center Affiliation Placeholder]",
    tagline: "Care Designed Around the Patient",
    address: {
      line1: "[Suite 402, Elite Medical Towers]",
      line2: "[Road No. 36, Health Boulevard]",
      area: "[Medical Enclave]",
      city: "[City Name]",
      state: "[State]",
      pincode: "[5000XX]",
      country: "India",
      googleMapsUrl: "https://maps.google.com",
      landmark: "[Opposite Central Garden / Near Medical Metro Station]",
    },
    timings: [
      { day: "Monday", hours: "[09:00 AM – 01:00 PM, 04:30 PM – 08:30 PM]", isOpen: true },
      { day: "Tuesday", hours: "[09:00 AM – 01:00 PM, 04:30 PM – 08:30 PM]", isOpen: true },
      { day: "Wednesday", hours: "[09:00 AM – 01:00 PM, 04:30 PM – 08:30 PM]", isOpen: true },
      { day: "Thursday", hours: "[09:00 AM – 01:00 PM, 04:30 PM – 08:30 PM]", isOpen: true },
      { day: "Friday", hours: "[09:00 AM – 01:00 PM, 04:30 PM – 08:30 PM]", isOpen: true },
      { day: "Saturday", hours: "[09:00 AM – 02:00 PM]", isOpen: true },
      { day: "Sunday", hours: "[Closed / By Prior Emergency Appointment]", isOpen: false },
    ],
  },
  about: {
    headline: "Medicine with Experience. Care with Purpose.",
    intro: [
      "Dr. Jagan is a highly regarded [Specialization Placeholder] committed to delivering evidence-based, patient-centric healthcare. With a focus on thorough diagnosis and personalized clinical management, Dr. Jagan blends modern medical scientific advancements with empathetic, attentive listening.",
      "Recognized for a disciplined diagnostic approach and open doctor-patient communication, Dr. Jagan ensures that every patient and their family clearly understand treatment pathways, expected outcomes, and preventative lifestyle measures.",
      "Dedicated to continuing medical education, Dr. Jagan routinely participates in clinical forums, research reviews, and international conferences to integrate the latest clinical guidelines into daily practice."
    ],
    philosophyQuote: "Every patient deserves to be heard, understood and cared for with the highest medical rigor.",
    philosophyAuthor: "Dr. Jagan",
    memberships: [
      "[National Medical Commission / Medical Council of India]",
      "[Indian Medical Association - Life Member]",
      "[National Specialist Association Placeholder]",
      "[International Society of Healthcare Specialists]"
    ],
    languagesSpoken: [
      "English (Fluent)",
      "తెలుగు - Telugu (Native)",
      "हिंदी - Hindi (Fluent)"
    ],
    careerTimeline: [
      {
        stage: "01",
        period: "[Year – Year]",
        title: "Undergraduate Medical Training (MBBS)",
        institution: "[Premier Medical University / College Name]",
        description: "Completed comprehensive medical rotations with honors in clinical diagnostics and patient care.",
      },
      {
        stage: "02",
        period: "[Year – Year]",
        title: "Postgraduate Residency & Specialization",
        institution: "[Renowned Teaching Hospital / National Institute]",
        description: "Rigorous hospital residency with extensive inpatient, intensive care, and outpatient clinical training.",
      },
      {
        stage: "03",
        period: "[Year – Year]",
        title: "Advanced Clinical Fellowship",
        institution: "[Apex Medical Research Center / International Center]",
        description: "Specialized training focusing on advanced diagnostic protocols and modern therapeutic methodologies.",
      },
      {
        stage: "04",
        period: "[Year – Year]",
        title: "Senior Consultant",
        institution: "[Leading Multispecialty Hospital Affiliation]",
        description: "Led clinical management, guided junior residents, and treated complex multidisciplinary cases.",
      },
      {
        stage: "05",
        period: "[Year – Present]",
        title: "Current Practice & Consultation",
        institution: "[Dr. Jagan Medical Practice & Partner Hospitals]",
        description: "Offering dedicated private consultations, outpatient specialist care, and patient-first clinical programs.",
      },
    ],
  },
  principles: [
    {
      title: "Evidence-Based Medicine",
      description: "Clinical decisions rooted in peer-reviewed science, modern clinical trials, and verified therapeutic guidelines.",
      icon: "ShieldCheck",
    },
    {
      title: "Personalized Treatment Plans",
      description: "No two patients are identical. Care strategies are individually tailored to specific medical histories and lifestyle needs.",
      icon: "Sparkles",
    },
    {
      title: "Clear, Transparent Communication",
      description: "Every diagnosis, laboratory result, and proposed procedure is explained in clear, compassionate, and straightforward terms.",
      icon: "MessageSquare",
    },
    {
      title: "Modern Diagnostic Approach",
      description: "Employing targeted, high-precision diagnostics to identify underlying root causes rather than merely masking symptoms.",
      icon: "Activity",
    },
    {
      title: "Compassionate Human Care",
      description: "A calm, reassuring clinical environment where patients are listened to with patience, respect, and zero rush.",
      icon: "HeartHandshake",
    },
    {
      title: "Long-Term Patient Support",
      description: "Structured follow-ups, proactive wellness monitoring, and ongoing support to ensure lasting health improvements.",
      icon: "Clock",
    },
  ],
  expertiseAreas: [
    {
      name: "[Expertise Area 01 - Diagnostic Assessment]",
      description: "Comprehensive health evaluations, early detection markers, and detailed clinical risk stratification.",
      icon: "Scan",
    },
    {
      name: "[Expertise Area 02 - Chronic Disease Care]",
      description: "Long-term therapeutic management, metabolic optimization, and structured clinical reviews.",
      icon: "TrendingUp",
    },
    {
      name: "[Expertise Area 03 - Specialist Consultations]",
      description: "Second opinions, complex diagnostic dilemmas, and coordinated specialty management.",
      icon: "Stethoscope",
    },
    {
      name: "[Expertise Area 04 - Preventive Health Programs]",
      description: "Evidence-backed screening protocols, lifestyle medicine, and cardiovascular & metabolic risk management.",
      icon: "ShieldAlert",
    },
    {
      name: "[Expertise Area 05 - Therapeutic Interventions]",
      description: "Targeted clinical treatments, procedural oversight, and post-intervention monitoring.",
      icon: "Crosshair",
    },
    {
      name: "[Expertise Area 06 - Virtual & Continuity Care]",
      description: "Seamless follow-up consultations, tele-health reviews, and digital health record coordination.",
      icon: "Laptop",
    },
  ],
  facilities: [
    {
      name: "Private Clinical Consultation Suites",
      description: "Soundproof, calm consultation spaces designed for thorough discussions with complete privacy and comfort.",
      features: ["Private examination area", "Digital health record integration", "Family consultation space"],
      icon: "Home",
    },
    {
      name: "Point-of-Care Diagnostics",
      description: "Quick-turnaround diagnostic assessments to support accurate same-day clinical decision making.",
      features: ["Advanced vitals monitoring", "Rapid biomarker checks", "High-precision digital equipment"],
      icon: "Activity",
    },
    {
      name: "Treatment & Minor Procedure Suite",
      description: "Sterile, comfortable clinical room equipped for minor in-clinic procedures and specialized evaluations.",
      features: ["Hospital-grade sterilization", "Ergonomic clinical bed", "Emergency backup support"],
      icon: "CheckCircle2",
    },
    {
      name: "Preventive Screening Center",
      description: "Systematic health packages tailored to age, family medical history, and specific diagnostic markers.",
      features: ["Age-specific protocols", "Metabolic panels", "Personalized risk reduction report"],
      icon: "ClipboardCheck",
    },
    {
      name: "Structured Follow-Up & Tele-Medicine",
      description: "Dedicated tele-consultation infrastructure for outstation patients and routine progress reviews.",
      features: ["Encrypted video calls", "E-prescriptions", "Direct coordination with Dr. Jagan's desk"],
      icon: "Video",
    },
    {
      name: "Patient Education & Resource Hub",
      description: "Curated patient guides, diet sheets, and medication management checklists for home care.",
      features: ["Printable condition guides", "Medication schedule cards", "Dietary lifestyle plans"],
      icon: "BookOpen",
    },
  ],
  treatments: [
    {
      id: "treatment-01",
      slug: "condition-treatment-01",
      title: "[Condition / Treatment 01 - Primary Clinical Focus]",
      category: "Specialized Clinical Care",
      shortDesc: "Comprehensive diagnostic evaluation and evidence-based therapeutic pathway tailored to individual health profiles.",
      fullDesc: "Dr. Jagan provides detailed assessment and structured management for [Condition / Treatment 01]. By examining clinical biomarkers, patient history, and targeted diagnostics, treatment is personalized for sustainable health outcomes.",
      symptoms: [
        "Persistent discomfort or recurring clinical symptoms",
        "Fatigue, reduced stamina, or unexplained physical changes",
        "Abnormal diagnostic or screening laboratory results",
        "Lack of sustained response to preliminary therapies"
      ],
      diagnosticMethods: [
        "Comprehensive clinical history and physical examination",
        "Targeted biochemical and laboratory evaluations",
        "Advanced imaging and functional tests as indicated",
        "Baseline risk scoring and progress markers"
      ],
      treatmentApproach: [
        "Customized medical therapy adhering to current clinical guidelines",
        "Targeted lifestyle modifications and nutritional guidance",
        "Scheduled progress tracking and dosage titration",
        "Preventive interventions to prevent recurrence"
      ],
      recoveryExpectations: "Patients typically observe steady improvements over [X to Y weeks] with routine adherence to prescribed care.",
      iconName: "Stethoscope",
    },
    {
      id: "treatment-02",
      slug: "condition-treatment-02",
      title: "[Condition / Treatment 02 - Advanced Specialty Management]",
      category: "Therapeutic Protocol",
      shortDesc: "Multi-modal therapeutic strategy designed to address underlying etiologies and restore functional wellness.",
      fullDesc: "Specialized clinical protocol for [Condition / Treatment 02] focusing on accurate staging, symptom control, and long-term vitality restoration.",
      symptoms: [
        "Localized pain, functional limitations, or swelling",
        "Sleep disruption or daytime fatigue",
        "Difficulty performing routine daily activities",
        "Progressive worsening over weeks or months"
      ],
      diagnosticMethods: [
        "High-resolution imaging review",
        "Clinical grading and functional mobility analysis",
        "Specialized diagnostic tests"
      ],
      treatmentApproach: [
        "Non-invasive therapeutic regimens",
        "Precision pharmacology and supportive interventions",
        "Step-by-step physical rehabilitation coordination"
      ],
      recoveryExpectations: "Structured recovery roadmap with milestone reviews every [X weeks].",
      iconName: "Activity",
    },
    {
      id: "treatment-03",
      slug: "condition-treatment-03",
      title: "[Condition / Treatment 03 - Chronic Care & Optimization]",
      category: "Chronic Disease Protocol",
      shortDesc: "Long-term therapeutic balance, risk mitigation, and continuous lifestyle-integrated medical supervision.",
      fullDesc: "Evidence-guided clinical management aimed at achieving optimal metabolic and physiological equilibrium while minimizing complications.",
      symptoms: [
        "Fluctuating vital parameters or lab indicators",
        "Medication side-effects or tolerance concerns",
        "Need for multi-drug regimen optimization"
      ],
      diagnosticMethods: [
        "Serial laboratory panels and trend analytics",
        "Organ function monitoring and vascular checks",
        "Dietary and metabolic profiling"
      ],
      treatmentApproach: [
        "Rationalized medication regimen with minimal polypharmacy",
        "Continuous remote monitoring checkpoints",
        "Direct patient-doctor communication channels"
      ],
      recoveryExpectations: "Ongoing maintenance with measurable health improvements verified through quarterly reviews.",
      iconName: "HeartPulse",
    },
    {
      id: "treatment-04",
      slug: "condition-treatment-04",
      title: "[Condition / Treatment 04 - Preventive Diagnostic Screening]",
      category: "Preventive Medicine",
      shortDesc: "Early risk identification through advanced screening protocols, genetic predispositions, and preventive strategies.",
      fullDesc: "Proactive healthcare strategy focused on identifying sub-clinical abnormalities before they manifest as chronic conditions.",
      symptoms: [
        "Strong family history of cardiovascular or metabolic illness",
        "High-stress executive or demanding lifestyle factors",
        "Desire for baseline longevity and health optimization"
      ],
      diagnosticMethods: [
        "Comprehensive executive blood profile",
        "Advanced cardiovascular risk stratification",
        "Nutritional biomarker and hormone assessment"
      ],
      treatmentApproach: [
        "Personalized preventive health blueprint",
        "Targeted micronutrient and lifestyle protocol",
        "Annual predictive health roadmap"
      ],
      recoveryExpectations: "Immediate actionable insights and measurable improvements in vitality within [X weeks].",
      iconName: "ShieldCheck",
    },
    {
      id: "treatment-05",
      slug: "condition-treatment-05",
      title: "[Condition / Treatment 05 - Second Opinion & Complex Cases]",
      category: "Specialist Review",
      shortDesc: "In-depth case review, diagnostic verification, and unbiased clinical guidance for challenging health conditions.",
      fullDesc: "Comprehensive re-evaluation of previous medical records, diagnostic imaging, and therapeutic responses to provide clarity and peace of mind.",
      symptoms: [
        "Conflicting diagnoses from multiple specialists",
        "Unsatisfactory response to current treatment regimens",
        "Consideration of major surgical or complex interventions"
      ],
      diagnosticMethods: [
        "Thorough historical dossier review",
        "Cross-verification of laboratory and pathological findings",
        "Consultation with multidisciplinary specialists if required"
      ],
      treatmentApproach: [
        "Independent, objective clinical assessment",
        "Clear explanation of all therapeutic options and trade-offs",
        "Personalized written clinical summary"
      ],
      recoveryExpectations: "Immediate clarity provided during the consultation session.",
      iconName: "FileCheck",
    },
    {
      id: "treatment-06",
      slug: "condition-treatment-06",
      title: "[Condition / Treatment 06 - Post-Care & Recovery Support]",
      category: "Rehabilitation & Follow-up",
      shortDesc: "Systematic post-intervention monitoring, gradual reconditioning, and prevention of clinical relapses.",
      fullDesc: "Structured continuity care to ensure complete physiological stabilization following hospitalization or intense clinical intervention.",
      symptoms: [
        "Post-procedure recovery milestones",
        "Need for tapering or adjusting medications",
        "Monitoring for delayed clinical complications"
      ],
      diagnosticMethods: [
        "Follow-up biomarker tracking",
        "Symptom resolution checklists",
        "Functional status index"
      ],
      treatmentApproach: [
        "Phased reconditioning program",
        "Ongoing nutritional and restorative support",
        "Scheduled check-ins at 2, 6, and 12-week intervals"
      ],
      recoveryExpectations: "Gradual, verified return to peak daily functional capacity.",
      iconName: "Sparkles",
    },
  ],
  testimonials: [
    {
      id: "test-01",
      patientInitial: "P. R.",
      verified: true,
      date: "[Recent Consultation]",
      treatmentCategory: "[Treatment 01 Placeholder]",
      rating: 5,
      quote: "Patient testimonial will appear here. The doctor provided thorough explanations and exceptional medical care.",
    },
    {
      id: "test-02",
      patientInitial: "S. K.",
      verified: true,
      date: "[Recent Consultation]",
      treatmentCategory: "[Treatment 02 Placeholder]",
      rating: 5,
      quote: "Patient testimonial will appear here. Highly professional consultation with genuine care and patience.",
    },
    {
      id: "test-03",
      patientInitial: "M. V.",
      verified: true,
      date: "[Recent Consultation]",
      treatmentCategory: "[Treatment 03 Placeholder]",
      rating: 5,
      quote: "Patient testimonial will appear here. Transparent diagnosis, clear communication, and an organized clinical environment.",
    },
    {
      id: "test-04",
      patientInitial: "A. N.",
      verified: true,
      date: "[Recent Consultation]",
      treatmentCategory: "[Treatment 04 Placeholder]",
      rating: 5,
      quote: "Patient testimonial will appear here. Dr. Jagan took time to review every report carefully without any rush.",
    },
  ],
  resources: [
    {
      id: "res-01",
      title: "How to Prepare for Your First Specialist Medical Consultation",
      category: "Patient Guide",
      readTime: "4 min read",
      publishDate: "Current Health Series",
      summary: "A practical checklist of essential documents, past records, and symptoms journaling to maximize your consultation value.",
      content: [
        "Organizing your medical documents chronologically before arriving at the clinic ensures that no important prior finding is missed.",
        "List all ongoing medications, supplements, and exact dosages on a sheet of paper or keep their containers handy.",
        "Write down your primary questions in advance so you can discuss all key concerns with Dr. Jagan."
      ],
      tags: ["Consultation Prep", "Medical Records", "Checklist"]
    },
    {
      id: "res-02",
      title: "Understanding Diagnostic Lab Tests: What Your Results Mean",
      category: "Clinical Education",
      readTime: "5 min read",
      publishDate: "Educational Series",
      summary: "Learn how to read reference ranges, why single isolated markers rarely tell the full story, and when repeat testing is warranted.",
      content: [
        "Laboratory reference ranges are derived from statistical population averages and must always be correlated with clinical symptoms.",
        "Fasting versus post-prandial values carry specific implications that your doctor will evaluate in total context.",
        "Never alter prescribed medical regimens based solely on an automated laboratory printout without physician review."
      ],
      tags: ["Diagnostics", "Lab Reports", "Preventive Care"]
    },
    {
      id: "res-03",
      title: "Evidence-Based Lifestyle Habits for Long-Term Vitality",
      category: "Wellness & Prevention",
      readTime: "6 min read",
      publishDate: "Health Insights",
      summary: "Actionable, clinically validated daily routines around sleep architecture, hydration, and cardiovascular protection.",
      content: [
        "Consistent sleep-wake schedules significantly improve hormonal balance and reduce inflammatory markers.",
        "Incorporating progressive moderate physical activity for 150 minutes per week dramatically enhances metabolic resilience.",
        "Regular preventative consultations enable timely course corrections before subclinical issues escalate."
      ],
      tags: ["Lifestyle Medicine", "Heart Health", "Longevity"]
    }
  ],
  faqs: [
    {
      category: "booking",
      question: "How do I book an appointment with Dr. Jagan?",
      answer: "You can book directly using the online appointment form on this website, send a WhatsApp request, or call our clinic desk at +91 95507 93263. Our clinic team will confirm your preferred time slot promptly.",
    },
    {
      category: "consultation",
      question: "What documents and reports should I bring to my appointment?",
      answer: "Please bring all prior medical records, diagnostic blood reports, imaging scans (X-ray, MRI, CT, Ultrasound), discharge summaries from prior hospital stays, and a list of all current prescription medications.",
    },
    {
      category: "consultation",
      question: "How long does a typical consultation take?",
      answer: "An initial in-depth consultation typically lasts between 20 to 35 minutes to allow for a thorough physical examination, historical review, and detailed discussion of treatment plans. Follow-up visits usually take 15 to 20 minutes.",
    },
    {
      category: "consultation",
      question: "Do you offer online video consultations for outstation patients?",
      answer: "Yes, Dr. Jagan conducts scheduled online tele-consultations for patients who cannot visit in person or require follow-up guidance. Select 'Online Video Consultation' during appointment booking.",
    },
    {
      category: "booking",
      question: "What is the consultation fee and accepted payment methods?",
      answer: "The consultation fee is [₹ Consultation Fee Placeholder]. We accept UPI, debit/credit cards, and net banking. Official receipts for insurance or tax purposes are provided immediately.",
    },
    {
      category: "insurance",
      question: "Can I claim health insurance for consultations or procedures?",
      answer: "While outpatient consultations are subject to your specific insurance policy coverage (OPD rider), all diagnostic tests and procedures conducted under hospital affiliations are eligible for standard cashless and reimbursement claims.",
    },
    {
      category: "general",
      question: "How do follow-up consultations work?",
      answer: "Follow-up consultations scheduled within [X days] of an initial consultation are offered at [Designated Follow-up Rate Placeholder]. You can share newly completed diagnostic reports directly via clinic channels.",
    },
    {
      category: "general",
      question: "What should I do in a medical emergency?",
      answer: "In acute life-threatening emergencies, please proceed immediately to the nearest hospital casualty/emergency room or dial local emergency services (108/112). For urgent clinic queries, reach our emergency helpline at [+91 98765 43219].",
    },
  ],
  patientJourney: [
    {
      step: "01",
      title: "Book Appointment",
      subtitle: "Effortless Scheduling",
      description: "Choose your preferred date, convenient morning or evening time slot, and consultation mode (in-clinic or online).",
      icon: "CalendarCheck",
    },
    {
      step: "02",
      title: "Comprehensive Consultation",
      subtitle: "Unrushed Discussion",
      description: "A detailed clinical interview where Dr. Jagan listens to your medical history, symptoms, and concerns without haste.",
      icon: "Stethoscope",
    },
    {
      step: "03",
      title: "Precise Diagnosis",
      subtitle: "Evidence-Based Assessment",
      description: "Targeted evaluation of clinical markers, diagnostic tests, and imaging to pinpoint the root cause of your condition.",
      icon: "Activity",
    },
    {
      step: "04",
      title: "Personalized Treatment",
      subtitle: "Tailored Therapeutic Plan",
      description: "A transparent, structured care pathway including necessary therapeutics, lifestyle modifications, and clear milestones.",
      icon: "Sparkles",
    },
    {
      step: "05",
      title: "Continuous Follow-Up",
      subtitle: "Long-Term Recovery",
      description: "Scheduled reviews to track clinical progress, adjust treatments as you heal, and maintain optimal long-term health.",
      icon: "HeartPulse",
    },
  ],
  appointmentSlots: {
    morning: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM"],
    afternoon: ["04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
    evening: ["06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"],
  },
  disclaimer: "Medical Disclaimer: The information provided on this website is for general educational and informational purposes only. It does not establish a doctor-patient relationship and must not be used as a substitute for professional medical diagnosis, advice, or treatment. Always consult Dr. Jagan or a certified healthcare provider regarding any health condition or medical emergency.",
};

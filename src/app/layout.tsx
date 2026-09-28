import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";
import { ThemeProvider } from "@/context/theme-context";
import { doctorConfig } from "@/config/doctor";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060b13" },
  ],
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${doctorConfig.personal.name} | ${doctorConfig.personal.specialization}`,
  description: `Official practice website of ${doctorConfig.personal.name} — ${doctorConfig.personal.specialization}. Dedicated to evidence-based, compassionate, patient-first clinical healthcare.`,
  keywords: [
    doctorConfig.personal.name,
    "Doctor Consultation",
    doctorConfig.personal.specialization,
    doctorConfig.clinic.name,
    "Medical Specialist",
    "Book Doctor Appointment",
    "Clinical Care",
  ],
  authors: [{ name: doctorConfig.personal.name }],
  metadataBase: new URL("https://drjagan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${doctorConfig.personal.name} | ${doctorConfig.personal.specialization}`,
    description: `Book consultation with ${doctorConfig.personal.name}. Modern, evidence-based, personalized clinical care.`,
    url: "https://drjagan.com",
    siteName: `${doctorConfig.personal.name} Healthcare`,
    images: [
      {
        url: "/images/dr-jagan.jpg",
        width: 1200,
        height: 630,
        alt: `${doctorConfig.personal.name} Medical Practice`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${doctorConfig.personal.name} | ${doctorConfig.personal.specialization}`,
    description: `Consultation with ${doctorConfig.personal.name}. Evidence-based clinical care.`,
    images: ["/images/dr-jagan.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org MedicalBusiness / Physician structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctorConfig.personal.name,
    description: doctorConfig.personal.specialization,
    image: "https://drjagan.com/images/dr-jagan.jpg",
    telephone: doctorConfig.contact.phone,
    email: doctorConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${doctorConfig.clinic.address.line1}, ${doctorConfig.clinic.address.line2}`,
      addressLocality: doctorConfig.clinic.address.city,
      addressRegion: doctorConfig.clinic.address.state,
      postalCode: doctorConfig.clinic.address.pincode,
      addressCountry: doctorConfig.clinic.address.country,
    },
    medicalSpecialty: doctorConfig.personal.specialization,
    availableService: doctorConfig.treatments.map((t) => ({
      "@type": "MedicalTherapy",
      name: t.title,
      description: t.shortDesc,
    })),
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakarta.variable} ${outfit.variable} overflow-x-hidden`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-900 dark:selection:text-teal-200 overflow-x-hidden w-full max-w-full">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, LINKEDIN_URL, UPWORK_URL } from "@/lib/constants";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Ureb Arif — Growth & Performance Marketing Consultant | Meta Ads, PPC, SEO",
    template: "%s | Ureb Arif — Growth Marketing Consultant",
  },
  description:
    "Ureb Arif is an independent growth marketing consultant in the United States specializing in Meta Ads, Google PPC, SEO, and lead generation for automotive dealers, rehab centers, and exterior cleaning companies. 100+ brands served. Book a free strategy call.",
  keywords: [
    "Meta Ads consultant USA",
    "PPC specialist United States",
    "lead generation expert",
    "Google Ads freelancer",
    "performance marketing consultant",
    "rehab center marketing",
    "automotive lead generation",
    "exterior cleaning marketing",
    "growth consultant Miami",
    "Facebook Ads expert",
    "digital marketing freelancer USA",
    "fractional CMO",
    "paid media consultant",
    "ROAS optimization",
  ],
  openGraph: {
    title: "Ureb Arif — Growth & Performance Marketing Consultant",
    description:
      "Meta Ads. Google PPC. SEO. Lead Generation. 100+ brands served across the United States.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ureb Arif — Growth & Performance Marketing Consultant",
    description:
      "Meta Ads. Google PPC. SEO. Lead Generation. 100+ brands served across the US.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ureb Arif",
  url: SITE_URL,
  image: `${SITE_URL}/images/ureb-neon-portrait.webp`,
  jobTitle: "Growth & Performance Marketing Consultant",
  description:
    "Independent growth marketing consultant specializing in Meta Ads, Google PPC, SEO, and lead generation for US businesses.",
  email: "hello@urebarif.com",
  sameAs: [
    LINKEDIN_URL,
    UPWORK_URL,
  ],
  knowsAbout: [
    "Meta Ads",
    "Facebook Advertising",
    "Google Ads",
    "PPC Management",
    "SEO",
    "Lead Generation",
    "Performance Marketing",
    "Growth Marketing",
    "Automotive Marketing",
    "Rehab Center Marketing",
    "Exterior Cleaning Marketing",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SZABIST",
  },
  worksFor: {
    "@type": "Organization",
    name: "Independent Consultant",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Ureb Arif — Independent growth marketing consultant for US businesses. Meta Ads, PPC, SEO, and lead generation.",
  publisher: {
    "@type": "Person",
    name: "Ureb Arif",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="Miami, Florida" />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Ureb Arif — 7+ Years in Performance Marketing",
  description:
    "From agency founder to independent growth consultant, Ureb Arif brings 7+ years of Meta Ads, Google PPC, and SEO expertise. 100+ US brands served across automotive, rehab, and exterior cleaning verticals. Top Rated on Upwork.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Ureb Arif — Growth Marketing Consultant",
    description:
      "7+ years of performance marketing. 100+ brands served. Agency founder turned independent consultant for US businesses.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "profile",
  },
};

const timeline = [
  {
    period: "2018 – 2020",
    role: "Digital Media & Marketing Lead",
    company: "Kenwood Limited",
    desc: "Led digital brand strategy for a major consumer electronics company. Built social media presence, managed ad budgets across Meta and Google, drove ecommerce growth.",
  },
  {
    period: "2020 – 2021",
    role: "Founder & CEO",
    company: "Markit Media",
    desc: "Built a creative digital marketing agency from scratch. Grew to 100+ brand clients across ecommerce, healthcare, and local services. Expanded to a second location.",
  },
  {
    period: "2021 – 2022",
    role: "Strategic Partner & Director of Operations",
    company: "Maxum Agency",
    desc: "Joined as strategic partner to scale agency operations. Reverse-engineered campaign workflows, improved delivery timelines, and positioned the agency for growth.",
  },
  {
    period: "2022 – 2024",
    role: "Digital Marketing Manager — PPC & SEO",
    company: "The Saari Girl",
    desc: "Managed full PPC and SEO strategy for an ecommerce brand. Built conversion funnels, optimized product feeds, and scaled ad spend profitably across US markets.",
  },
  {
    period: "2023 – Present",
    role: "Digital Marketing Manager — PPC & SEO",
    company: "Kemah Palms Recovery (Houston, TX)",
    desc: "Lead all paid acquisition for a premier rehab center in Houston. HIPAA-compliant campaigns, sensitive targeting, 4.2x ROAS on Meta and Google Ads.",
  },
  {
    period: "Present",
    role: "Independent Growth Consultant",
    company: "US Clients — Select Engagements",
    desc: "Working directly with businesses across the United States that need senior, hands-on marketing expertise. No middlemen, no junior handoffs. My brain, your business.",
  },
];

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Ureb Arif",
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/ureb-headshot.jpg`,
    jobTitle: "Growth & Performance Marketing Consultant",
    description:
      "Independent growth consultant with 7+ years managing Meta Ads, Google PPC, and SEO for US businesses across automotive, rehab, and exterior cleaning industries.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SZABIST",
    },
    knowsAbout: [
      "Meta Ads",
      "Google Ads",
      "PPC",
      "SEO",
      "Lead Generation",
      "Growth Marketing",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "MBA in Digital Media",
      credentialCategory: "degree",
    },
    sameAs: [
      "https://www.linkedin.com/in/ureb-arif-digital-marketing-seo/",
      "https://www.upwork.com/freelancers/digitalmarketingandseo",
    ],
  },
};

export default function About() {
  return (
    <>
      <JsonLd data={profileSchema} />

      <section className="py-20 md:py-28" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                About Me
              </p>
              <h1
                id="about-heading"
                className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
              >
                I&apos;ve been on every side of the table.
              </h1>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  In-house brand manager. Agency founder. Strategic partner.
                  Independent consultant. I&apos;ve run paid media campaigns from
                  every seat in the room, which means I know exactly what works
                  and what&apos;s wasted budget for US businesses.
                </p>
                <p>
                  After building Markit Media to 100+ clients and managing campaigns
                  for brands across automotive, healthcare, ecommerce, and local
                  services in the United States, I made a deliberate choice: work
                  with fewer clients, deliver better results.
                </p>
                <p>
                  Today I consult independently with US businesses. When you hire me,
                  you get me — not a junior account manager reading from a playbook.
                  Senior-level Meta Ads, Google PPC, and SEO strategy and execution,
                  delivered directly by someone who&apos;s managed over $2M in ad spend.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-accent/20 shadow-xl">
                  <Image
                    src="/ureb-headshot.jpg"
                    alt="Ureb Arif — Performance marketing consultant with 7+ years experience managing Meta Ads and Google PPC for US businesses"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-surface border border-border rounded-2xl p-8">
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-6">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Based in", value: "Miami, FL — Serving US businesses" },
                    { label: "Education", value: "MBA, SZABIST (Digital Media)" },
                    { label: "Upwork", value: "Top Rated Freelancer" },
                    { label: "LinkedIn", value: "17,000+ followers" },
                    { label: "Brands served", value: "100+ across the US" },
                    { label: "Specialties", value: "Meta Ads, Google PPC, SEO, Lead Gen" },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="flex justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-muted">{f.label}</span>
                      <span className="text-sm font-semibold text-right">
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-surface border-y border-border py-20 md:py-28"
        aria-labelledby="career-heading"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Career Path
            </p>
            <h2
              id="career-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight"
            >
              Every role shaped the consultant I am today
            </h2>
          </div>

          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div
                key={i}
                className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border last:border-l-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-accent" />
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                  {t.period}
                </p>
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg">
                  {t.role}
                </h3>
                <p className="text-sm font-semibold text-muted mb-2">
                  {t.company}
                </p>
                <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-white tracking-tight mb-4">
            Want to work together?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            I take on a limited number of US clients each quarter. Let&apos;s
            see if we&apos;re a fit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white font-bold px-10 py-4 rounded-lg hover:bg-accent-hover transition-colors"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}

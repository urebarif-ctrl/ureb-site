import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Ureb Arif — Senior Performance Marketing Consultant",
  description:
    "From agency founder to independent growth consultant — Ureb Arif brings 7+ years of Meta Ads, Google PPC, and SEO expertise. 100+ brands served. Top Rated on Upwork. Founder of Markit Media.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Ureb Arif — Growth Marketing Consultant",
    description: "7+ years of performance marketing. 100+ brands served. Agency founder turned independent consultant.",
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
    desc: "Built a creative digital marketing agency from scratch. Grew to 100+ brand clients across ecommerce, healthcare, and local services.",
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
    company: "Kemah Palms Recovery, Houston TX",
    desc: "Lead all paid acquisition for a premier rehab center. HIPAA-compliant campaigns, sensitive targeting, 4.2x ROAS on Meta and Google Ads.",
  },
  {
    period: "Present",
    role: "Independent Growth Consultant",
    company: "Select US & International Clients",
    desc: "Working directly with businesses that need senior, hands-on marketing expertise. No middlemen, no junior handoffs.",
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
    description: "Independent growth consultant with 7+ years managing Meta Ads, Google PPC, and SEO for US businesses.",
    alumniOf: { "@type": "CollegeOrUniversity", name: "SZABIST" },
    knowsAbout: ["Meta Ads", "Google Ads", "PPC", "SEO", "Lead Generation", "Growth Marketing"],
    hasCredential: { "@type": "EducationalOccupationalCredential", name: "MBA in Digital Media", credentialCategory: "degree" },
    sameAs: [
      "https://www.linkedin.com/in/ureb-arif-digital-marketing-seo/",
      "https://www.upwork.com/freelancers/~01207beceaf75e1a4f",
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
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">About Me</p>
              <h1 id="about-heading" className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
                I&apos;ve been on every side of the table.
              </h1>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  In-house brand manager. Agency founder. Strategic partner.
                  Independent consultant. I&apos;ve run paid media campaigns from
                  every seat in the room — which means I know exactly what works
                  and what&apos;s wasted budget.
                </p>
                <p>
                  After building Markit Media to 100+ clients and managing campaigns
                  for brands across automotive, healthcare, ecommerce, and local
                  services, I made a deliberate choice: work with fewer clients,
                  deliver better results.
                </p>
                <p>
                  Today I consult independently with businesses across the US, UK,
                  UAE, and internationally. When you hire me, you get me — senior-level
                  Meta Ads, Google PPC, and SEO strategy and execution, delivered
                  directly by someone who&apos;s managed over $2M in ad spend.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-2xl bg-accent/5 rotate-2" />
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-accent-muted shadow-xl">
                    <img
                      src="/ureb-headshot.jpg"
                      alt="Ureb Arif — Performance marketing consultant"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white border border-border rounded-2xl p-8 shadow-card">
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  {[
                    { label: "Based in", value: "Karachi, PK — Serving US, UK, UAE" },
                    { label: "Education", value: "MBA, SZABIST (Digital Media)" },
                    { label: "Upwork", value: "Top Rated Freelancer" },
                    { label: "LinkedIn", value: "17,000+ followers" },
                    { label: "Brands served", value: "100+ across multiple markets" },
                    { label: "Specialties", value: "Meta Ads, Google PPC, SEO, Lead Gen" },
                    { label: "Agency", value: "Founder, Markit Media" },
                  ].map((f) => (
                    <div key={f.label} className="flex justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                      <span className="text-sm text-muted">{f.label}</span>
                      <span className="text-sm font-semibold text-right">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-20 md:py-28" aria-labelledby="career-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Career Path</p>
            <h2 id="career-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">
              Every role shaped the consultant I am today
            </h2>
          </div>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div key={i} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border last:border-l-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-accent" />
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">{t.period}</p>
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg">{t.role}</h3>
                <p className="text-sm font-semibold text-muted mb-2">{t.company}</p>
                <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-cta py-20" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-white tracking-tight mb-4">
            Want to work together?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            I take on a limited number of clients each quarter. Let&apos;s see if we&apos;re a fit.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white font-bold px-10 py-4 rounded-xl hover:bg-accent-hover transition-all duration-200">
            Book a Free Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

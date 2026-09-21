import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
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

const skills = [
  { name: "Meta Ads (Facebook & Instagram)", level: 95 },
  { name: "Google Ads / PPC", level: 92 },
  { name: "SEO & Content Strategy", level: 88 },
  { name: "Conversion Rate Optimization", level: 85 },
  { name: "Marketing Automation & CRM", level: 82 },
  { name: "Analytics & Attribution", level: 90 },
];

const values = [
  {
    title: "Transparency",
    desc: "You see the same data I see. Weekly reports with real numbers — no vanity metrics, no spin. If something isn't working, you'll know immediately.",
  },
  {
    title: "Ownership",
    desc: "I treat your campaigns like my own business. Every dollar of your budget matters. I'm not optimizing for billable hours — I'm optimizing for your results.",
  },
  {
    title: "Speed",
    desc: "No 2-week ticket queues. When an opportunity or problem arises, I act immediately. Campaign changes go live in hours, not weeks.",
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

      {/* ─── Hero ─── */}
      <section className="py-20 md:py-28" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">About Me</p>
                <h1 id="about-heading" className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
                  I&apos;ve been on every side of the table.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={100}>
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
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <ScrollReveal variant="scale">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent rotate-2" />
                    <div className="relative w-52 h-52 rounded-2xl overflow-hidden border border-border shadow-xl">
                      <img
                        src="/ureb-headshot.jpg"
                        alt="Ureb Arif — Performance marketing consultant"
                        width={208}
                        height={208}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
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
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section className="bg-surface border-y border-border py-20 md:py-28" aria-labelledby="skills-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Expertise</p>
              <h2 id="skills-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">
                Core competencies
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {skills.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 80}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">{s.name}</span>
                    <span className="text-sm text-muted">{s.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-20 md:py-28" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">How I Operate</p>
              <h2 id="values-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">
                Principles that guide every engagement
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="p-8 rounded-2xl border border-border bg-white card-hover">
                  <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center mb-6">
                    <span className="text-white font-[family-name:var(--font-jakarta)] font-extrabold text-sm">0{i + 1}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Career Timeline ─── */}
      <section className="bg-foreground text-white py-20 md:py-28 relative overflow-hidden" aria-labelledby="career-heading">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/[0.04] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Career Path</p>
              <h2 id="career-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">
                Every role shaped the consultant I am today
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-zinc-700 last:border-l-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-foreground border-2 border-accent" />
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">{t.period}</p>
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg">{t.role}</h3>
                  <p className="text-sm font-semibold text-zinc-400 mb-2">{t.company}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 md:py-32" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center bg-surface border border-border rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/[0.04] rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                  Want to work together?
                </h2>
                <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
                  I take on a limited number of clients each quarter to ensure every engagement gets my full attention. Let&apos;s see if we&apos;re a fit.
                </p>
                <Link href="/contact" className="btn-shine group inline-flex items-center gap-2 bg-foreground text-white font-bold px-10 py-4 rounded-xl hover:bg-foreground-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                  Book a Free Strategy Call
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

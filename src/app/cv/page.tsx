import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SITE_URL, SITE_EMAIL, LINKEDIN_URL, UPWORK_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CV — Ureb Arif",
  description:
    "Professional resume of Ureb Arif — Growth & Performance Marketing Consultant. 7+ years of Meta Ads, Google PPC, SEO expertise. MBA, SZABIST. Top Rated on Upwork.",
  alternates: { canonical: `${SITE_URL}/cv` },
  robots: { index: false, follow: true },
};

const experience = [
  {
    period: "2024 -- Present",
    role: "Digital Marketing Manager -- PPC & SEO",
    company: "Kohala Palms Recovery, Houston TX",
    bullets: [
      "Lead all paid acquisition for a premier addiction treatment center across Meta and Google Ads.",
      "Design and manage HIPAA-compliant campaigns with sensitive audience targeting.",
      "Achieved 4.2x ROAS through full-funnel optimization and conversion tracking.",
    ],
  },
  {
    period: "2022 -- 2024",
    role: "Digital Marketing Manager -- PPC & SEO",
    company: "The Stash Girl",
    bullets: [
      "Managed end-to-end PPC and SEO strategy for a US ecommerce brand.",
      "Built conversion funnels, optimized product feeds, and scaled ad spend profitably.",
      "Drove organic traffic growth through technical SEO and content strategy.",
    ],
  },
  {
    period: "2021 -- 2022",
    role: "Strategic Partner & Director of Operations",
    company: "Mozare Agency",
    bullets: [
      "Joined as strategic partner to scale agency operations and delivery workflows.",
      "Reverse-engineered campaign processes to improve timelines and client outcomes.",
      "Positioned the agency for sustainable growth through operational improvements.",
    ],
  },
  {
    period: "2020 -- 2021",
    role: "Founder & CEO",
    company: "Markit Media",
    bullets: [
      "Built a full-service digital marketing agency from the ground up.",
      "Grew client roster to 100+ brands across ecommerce, healthcare, and local services.",
      "Managed all aspects: client acquisition, campaign strategy, team building, and delivery.",
    ],
  },
  {
    period: "2018 -- 2020",
    role: "Digital Media & Marketing Lead",
    company: "Koranest Limited",
    bullets: [
      "Led digital brand strategy for a consumer electronics company.",
      "Built social media presence and managed ad budgets across Meta and Google.",
      "Drove ecommerce growth through integrated paid and organic campaigns.",
    ],
  },
];

const coreExpertise = [
  "Meta Ads (Facebook & Instagram)",
  "Google Ads / PPC",
  "Search Engine Optimization",
  "Growth Marketing Strategy",
  "Conversion Rate Optimization",
  "Lead Generation & Funnel Design",
  "Marketing Automation",
  "Analytics & Attribution",
];

const platforms = [
  "Meta Business Suite",
  "Google Ads",
  "Google Analytics 4 (GA4)",
  "Google Tag Manager (GTM)",
  "Google Search Console",
  "Klaviyo",
  "HubSpot",
  "Shopify",
  "WordPress",
  "Semrush",
  "Ahrefs",
  "Looker Studio",
];

const industries = [
  "Healthcare & Addiction Treatment",
  "Ecommerce & DTC Brands",
  "Automotive",
  "Exterior Cleaning Services",
  "SaaS & Technology",
  "Local Services & Lead Gen",
  "Real Estate",
  "Education",
];

const achievements = [
  { label: "Brands served", value: "100+" },
  { label: "Ad spend managed", value: "$2M+" },
  { label: "Upwork status", value: "Top Rated" },
  { label: "LinkedIn following", value: "17,000+" },
  { label: "Agency founded", value: "Markit Media" },
  { label: "Years of experience", value: "7+" },
];

export default function CVPage() {
  return (
    <>
      {/* ─── Print Styles ─── */}
      <style>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          main { padding: 0 !important; }
          section { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; break-inside: avoid; }
          body { background: white !important; color: #000 !important; font-size: 11pt !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur { opacity: 1 !important; transform: none !important; filter: none !important; transition: none !important; }
          a { color: #000 !important; text-decoration: underline !important; }
          .bg-foreground { background: #f5f5f5 !important; color: #000 !important; }
          .bg-foreground h2, .bg-foreground h3, .bg-foreground p, .bg-foreground span, .bg-foreground li { color: #000 !important; }
          .card-hover:hover { transform: none !important; box-shadow: none !important; }
          h1 { font-size: 24pt !important; }
          h2 { font-size: 16pt !important; }
          h3 { font-size: 13pt !important; }
        }
      `}</style>

      {/* ─── Header ─── */}
      <section className="py-16 md:py-24" aria-labelledby="cv-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h1
                id="cv-heading"
                className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-3"
              >
                Ureb Arif
              </h1>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Growth & Performance Marketing Consultant
              </p>
              <p className="text-muted text-sm">
                Karachi, PK &mdash; Serving US, UK, UAE
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted">
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-accent transition-colors">
                  {SITE_EMAIL}
                </a>
                <span className="hidden md:inline text-border-strong">&middot;</span>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
                <span className="hidden md:inline text-border-strong">&middot;</span>
                <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Upwork
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Actions */}
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-3 no-print">
              <a
                href="/ureb-arif-cv.pdf"
                className="btn-shine group inline-flex items-center gap-2 bg-foreground text-white font-bold px-8 py-3.5 rounded-xl hover:bg-foreground-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
                </svg>
                Download CV as PDF
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-foreground text-foreground font-bold px-8 py-3.5 rounded-xl hover:bg-foreground hover:text-white transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                Contact Ureb
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Professional Summary ─── */}
      <section className="border-t border-border bg-white py-14" aria-labelledby="summary-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 id="summary-heading" className="font-[family-name:var(--font-jakarta)] text-xl font-extrabold tracking-tight mb-4 uppercase text-xs tracking-widest text-muted-foreground">
              Professional Summary
            </h2>
            <p className="text-muted leading-relaxed">
              Performance marketing consultant with 7+ years of experience driving measurable growth
              for 100+ brands across the US, UK, and UAE. Specialized in Meta Ads, Google PPC, and
              SEO with over $2M in ad spend managed. Founded Markit Media, a full-service digital
              marketing agency. Recognized as a Top Rated freelancer on Upwork. MBA in Digital Media
              from SZABIST. Known for transparent reporting, hands-on execution, and a results-first
              approach to client engagements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Core Expertise ─── */}
      <section className="border-t border-border py-14" aria-labelledby="expertise-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 id="expertise-heading" className="font-[family-name:var(--font-jakarta)] text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-6">
              Core Expertise
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {coreExpertise.map((skill, i) => (
              <ScrollReveal key={skill} delay={i * 50}>
                <div className="bg-surface border border-border rounded-xl px-4 py-3 text-sm font-medium text-foreground text-center">
                  {skill}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Employment History ─── */}
      <section className="bg-foreground text-white py-16 md:py-20" aria-labelledby="experience-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 id="experience-heading" className="font-[family-name:var(--font-jakarta)] text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-10">
              Employment History
            </h2>
          </ScrollReveal>
          <div className="space-y-10">
            {experience.map((job, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="border-l-2 border-zinc-700 pl-6">
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                    {job.period}
                  </p>
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg">
                    {job.role}
                  </h3>
                  <p className="text-sm font-semibold text-zinc-400 mb-3">{job.company}</p>
                  <ul className="space-y-1.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-zinc-400 leading-relaxed flex gap-2">
                        <span className="text-accent mt-1 shrink-0">&bull;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Leadership ─── */}
      <section className="border-b border-border py-14" aria-labelledby="leadership-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 id="leadership-heading" className="font-[family-name:var(--font-jakarta)] text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-6">
              Leadership Experience
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="bg-surface border border-border rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-1">
                Founder & CEO &mdash; Markit Media
              </h3>
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                2020 -- Present
              </p>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Founded and grew a full-service digital marketing agency serving 100+ brands.
                Responsible for client acquisition, campaign strategy, team recruitment, and
                operational delivery. Built processes for scalable campaign management across
                Meta Ads, Google Ads, and SEO.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Agency Operations", "Team Leadership", "Client Strategy", "Business Development"].map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Industries Served ─── */}
      <section className="py-14" aria-labelledby="industries-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 id="industries-heading" className="font-[family-name:var(--font-jakarta)] text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-6">
              Industries Served
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind} delay={i * 50}>
                <div className="border border-border rounded-xl px-4 py-3 text-sm text-muted text-center">
                  {ind}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Platforms & Tools ─── */}
      <section className="border-t border-border bg-white py-14" aria-labelledby="tools-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 id="tools-heading" className="font-[family-name:var(--font-jakarta)] text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-6">
              Platforms & Tools
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-2">
            {platforms.map((tool, i) => (
              <ScrollReveal key={tool} delay={i * 40}>
                <span className="inline-block bg-foreground text-white text-xs font-medium px-4 py-2 rounded-lg">
                  {tool}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Selected Achievements ─── */}
      <section className="border-t border-border py-14" aria-labelledby="achievements-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 id="achievements-heading" className="font-[family-name:var(--font-jakarta)] text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-8">
              Selected Achievements
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <ScrollReveal key={a.label} delay={i * 60}>
                <div className="bg-surface border border-border rounded-xl p-5 text-center card-hover">
                  <p className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-foreground mb-1">
                    {a.value}
                  </p>
                  <p className="text-xs text-muted uppercase tracking-wider font-medium">
                    {a.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Education & Languages ─── */}
      <section className="bg-foreground text-white py-14" aria-labelledby="education-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollReveal>
              <div>
                <h2 id="education-heading" className="font-[family-name:var(--font-jakarta)] text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-6">
                  Education
                </h2>
                <div className="border-l-2 border-zinc-700 pl-6">
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg">
                    MBA &mdash; Digital Media
                  </h3>
                  <p className="text-sm text-zinc-400 mb-1">SZABIST (Shaheed Zulfikar Ali Bhutto Institute of Science and Technology)</p>
                  <p className="text-xs text-zinc-500">Karachi, Pakistan</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div>
                <h2 className="font-[family-name:var(--font-jakarta)] text-xs font-extrabold uppercase tracking-widest text-zinc-500 mb-6">
                  Languages
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-zinc-800 pb-3">
                    <span className="text-sm">English</span>
                    <span className="text-sm text-zinc-400">Fluent</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-3">
                    <span className="text-sm">Urdu</span>
                    <span className="text-sm text-zinc-400">Native</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ─── */}
      <section className="py-16 md:py-20 no-print" aria-label="Contact call to action">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center bg-surface border border-border rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/[0.04] rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <h2 className="font-[family-name:var(--font-jakarta)] text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                  Interested in working together?
                </h2>
                <p className="text-muted text-sm mb-8 max-w-lg mx-auto">
                  I take on a limited number of clients each quarter. Let&apos;s discuss how I can help grow your business.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href="/contact"
                    className="btn-shine group inline-flex items-center gap-2 bg-foreground text-white font-bold px-8 py-3.5 rounded-xl hover:bg-foreground-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg text-sm"
                  >
                    Book a Strategy Call
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <a
                    href="/ureb-arif-cv.pdf"
                    className="inline-flex items-center gap-2 border-2 border-foreground text-foreground font-bold px-8 py-3.5 rounded-xl hover:bg-foreground hover:text-white transition-all duration-300 hover:-translate-y-0.5 text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

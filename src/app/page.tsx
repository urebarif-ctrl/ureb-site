import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/constants";

const stats = [
  { value: "100+", label: "Brands Served" },
  { value: "7+", label: "Years Experience" },
  { value: "$2M+", label: "Ad Spend Managed" },
  { value: "Top Rated", label: "Upwork Status" },
];

const services = [
  {
    title: "Meta Ads Management",
    desc: "Full-funnel Facebook and Instagram campaigns built for US audiences. From audience architecture to creative direction to weekly ROAS reporting.",
    href: "/services/meta-ads",
  },
  {
    title: "Google Ads & PPC",
    desc: "Search, Shopping, Display, and Performance Max campaigns. Bid strategy, negative keyword management, and conversion tracking that actually works.",
    href: "/services/google-ads",
  },
  {
    title: "SEO & Organic Growth",
    desc: "Technical audits, content strategy, and local SEO. Building sustainable organic traffic that compounds alongside your paid campaigns.",
    href: "/services/seo",
  },
  {
    title: "Growth Consulting",
    desc: "Fractional CMO services for US companies. Full marketing strategy, channel mix, funnel optimization, and team oversight without the full-time salary.",
    href: "/services/growth-consulting",
  },
];

const industries = [
  { name: "Automotive Dealers", icon: "M8 17h.01M16 17h.01M3 11l1.5-5.25A2 2 0 016.4 4h11.2a2 2 0 011.9 1.75L21 11M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6M3 11h18" },
  { name: "Rehab & Recovery", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
  { name: "Exterior Cleaning", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" },
  { name: "Ecommerce & Shopify", icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" },
  { name: "Local Services", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
  { name: "Restaurants & QSR", icon: "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" },
];

const results = [
  { metric: "4.2x", label: "ROAS", context: "Rehab center, Houston TX" },
  { metric: "67%", label: "Lower CPL", context: "Automotive dealers, US" },
  { metric: "3x", label: "Lead Volume", context: "Exterior cleaning, FL" },
];

const process = [
  {
    step: "01",
    title: "Strategy Call",
    desc: "A 30-minute call to understand your business, goals, and what's not working. No pitch — just clarity on the opportunity.",
  },
  {
    step: "02",
    title: "Audit & Plan",
    desc: "I review your campaigns, landing pages, and funnel. You get a detailed report with specific revenue opportunities.",
  },
  {
    step: "03",
    title: "Execute & Scale",
    desc: "I build and manage your campaigns. Weekly reports, monthly deep dives, real-time Slack access. No contracts required.",
  },
];

const faqs = [
  {
    question: "What does a growth marketing consultant do?",
    answer:
      "A growth marketing consultant builds and manages revenue-driving campaigns across paid media (Meta Ads, Google Ads), SEO, and conversion optimization. Unlike an agency, you get senior-level strategy and execution from one expert — no junior handoffs. I focus on measurable outcomes like ROAS, cost-per-lead, and lead volume for US businesses.",
  },
  {
    question: "How much does it cost to hire a performance marketing consultant?",
    answer:
      "Engagement pricing depends on scope, ad spend, and channels. Most clients invest $3,000–$10,000/month in management fees, plus their ad budget. Every engagement starts with a free strategy call where I review your current setup and identify specific opportunities before any commitment.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "I specialize in automotive dealership leads, rehab and recovery center admissions, exterior cleaning services, ecommerce, and general lead generation. I've managed over $2M in ad spend across these verticals for 100+ brands.",
  },
  {
    question: "Do you work with businesses outside the United States?",
    answer:
      "While my primary focus is US businesses, I work with companies globally on their US market entry and growth strategies. I also serve clients in the UK, UAE, and other international markets.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ureb Arif — Growth & Performance Marketing Consultant",
  description: "Independent growth marketing consultant specializing in Meta Ads, Google PPC, SEO, and lead generation for US businesses.",
  url: SITE_URL,
  publisher: { "@type": "Person", name: "Ureb Arif" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ureb Arif — Growth Marketing",
  description: "Performance marketing and lead generation services for US businesses.",
  url: SITE_URL,
  provider: { "@type": "Person", name: "Ureb Arif" },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: ["Meta Ads Management", "Google Ads PPC", "SEO", "Lead Generation", "Growth Consulting"],
};

export default function Home() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-muted bg-accent-light text-xs font-semibold text-accent tracking-wide mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Independent Growth Consultant
              </div>
              <h1 className="font-[family-name:var(--font-jakarta)] text-4xl md:text-[3.25rem] lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                I don&apos;t run campaigns.
                <br />
                <span className="text-gradient-gold">I build revenue engines.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-xl">
                Meta Ads. Google PPC. SEO. Senior-level performance marketing
                for US businesses that need measurable growth — not guesswork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-foreground text-white font-semibold px-8 py-4 rounded-xl hover:bg-foreground-secondary transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book a Free Strategy Call
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border-2 border-border-strong text-foreground font-semibold px-8 py-4 rounded-xl hover:border-foreground hover:bg-surface transition-all duration-200"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-accent/5 -rotate-3" />
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-accent-muted shadow-xl">
                  <img
                    src="/ureb-headshot.jpg"
                    alt="Ureb Arif — Growth and Performance Marketing Consultant"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-foreground text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Upwork Top Rated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="border-y border-border bg-surface" aria-label="Key statistics">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-[family-name:var(--font-jakarta)] text-2xl md:text-3xl font-extrabold text-foreground">
                  {s.value}
                </p>
                <p className="text-xs text-muted-light mt-1 uppercase tracking-wider font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-20 md:py-28" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div className="max-w-lg">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">What I Do</p>
              <h2 id="services-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">
                Performance marketing that moves the needle
              </h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-foreground hover:text-accent transition-colors inline-flex items-center gap-1 shrink-0">
              All services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group border border-border rounded-xl p-7 hover:border-accent-muted hover:shadow-lg transition-all duration-200 bg-white"
              >
                <h3 className="font-[family-name:var(--font-jakarta)] text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Results ─── */}
      <section className="bg-foreground text-white py-20 md:py-28" aria-labelledby="results-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-lg mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Proven Results</p>
            <h2 id="results-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Numbers, not promises
            </h2>
            <p className="text-slate-400 text-base">
              Measurable outcomes from real campaigns across US industries.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((r) => (
              <div key={r.label} className="border border-slate-800 rounded-xl p-8 hover:border-accent/40 transition-colors">
                <p className="font-[family-name:var(--font-jakarta)] text-5xl font-extrabold text-accent mb-2">{r.metric}</p>
                <p className="font-semibold text-lg mb-1">{r.label}</p>
                <p className="text-slate-500 text-sm">{r.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industries ─── */}
      <section className="py-20 md:py-28 bg-surface-warm" aria-labelledby="ind-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Industries</p>
            <h2 id="ind-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">
              Deep expertise where it matters
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href="/industries"
                className="group flex items-center gap-3 bg-white border border-border rounded-xl p-5 hover:border-accent-muted hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ind.icon} />
                  </svg>
                </div>
                <span className="text-sm font-semibold group-hover:text-accent transition-colors">{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-20 md:py-28" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">How It Works</p>
            <h2 id="process-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">
              Three steps to measurable growth
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((s) => (
              <div key={s.step} className="relative">
                <span className="font-[family-name:var(--font-jakarta)] text-6xl font-extrabold text-accent/10 absolute -top-4 -left-2">{s.step}</span>
                <div className="pt-8">
                  <h3 className="font-[family-name:var(--font-jakarta)] text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-surface border-y border-border py-20" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">FAQ</p>
            <h2 id="faq-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">
              Common questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-border rounded-xl p-6 md:p-8">
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-base mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-cta py-20" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ready to stop guessing and start growing?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
            Limited availability. I work with a select number of clients
            to ensure hands-on attention and measurable ROI.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-bold px-10 py-4 rounded-xl hover:bg-accent-hover transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book Your Free Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

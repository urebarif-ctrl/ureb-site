import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountUp } from "@/components/count-up";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Window Cleaning & Pressure Washing Case Study — 3x Lead Volume in 5 Months",
  description:
    "How hyper-local Meta campaigns, Google LSA, and service-area SEO pages took a Central Florida exterior cleaning business from 40 leads/month to 120+ with a $23 average CPL.",
  alternates: {
    canonical: `${SITE_URL}/case-studies/exterior-cleaning-florida`,
  },
  openGraph: {
    title:
      "3x Lead Volume for Exterior Cleaning Business | Ureb Arif Case Study",
    description:
      "From 40 leads/month to 120+ in 5 months. $23 avg CPL vs $65+ industry average. Revenue up 185%.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Window Cleaning & Pressure Washing — 3x Lead Volume in 5 Months",
  description:
    "Case study: How hyper-local Meta campaigns, Google LSA, and SEO pages generated 120+ monthly leads at $23 CPL for a Central Florida exterior cleaning business.",
  author: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  publisher: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  url: `${SITE_URL}/case-studies/exterior-cleaning-florida`,
  mainEntityOfPage: `${SITE_URL}/case-studies/exterior-cleaning-florida`,
};

const kpis = [
  { label: "Lead Volume", end: 3, suffix: "x", decimals: 0, duration: 1800 },
  {
    label: "Average CPL",
    end: 23,
    prefix: "$",
    suffix: "",
    decimals: 0,
    duration: 2000,
  },
  {
    label: "Google Reviews",
    end: 47,
    prefix: "",
    suffix: "",
    decimals: 0,
    duration: 2200,
  },
  {
    label: "Revenue Growth",
    end: 185,
    prefix: "",
    suffix: "%",
    decimals: 0,
    duration: 2400,
  },
];

const strategySteps = [
  {
    title: "Local Market Mapping",
    desc: "Identified the top 15 zip codes by household income and home value. Prioritized areas with the highest density of owner-occupied homes.",
  },
  {
    title: "Hyper-Local Meta Campaigns",
    desc: 'Created zip-code-specific ad sets with localized messaging ("Serving [Neighborhood] homeowners since 2015"). Seasonal creative rotated monthly.',
  },
  {
    title: "Google Local Service Ads",
    desc: "Set up and optimized Google LSA profile with verified license and insurance. Managed review generation to build trust signals.",
  },
  {
    title: "Service-Area SEO Pages",
    desc: 'Built 12 location-specific landing pages targeting "[service] + [city/neighborhood]" keywords. Optimized for local search intent.',
  },
  {
    title: "Review Generation System",
    desc: "Implemented automated review request sequence post-service. Guided satisfied customers to Google with direct links.",
  },
  {
    title: "Seasonal Budget Strategy",
    desc: "Increased spend during peak spring/fall seasons, maintained presence during summer with reduced budgets and maintenance-focused messaging.",
  },
];

const timeline = [
  {
    month: "Month 1",
    desc: "Market mapping, tracking setup, LSA profile creation, initial Meta campaigns",
  },
  {
    month: "Month 2",
    desc: "First leads coming in, SEO pages published, review system active",
  },
  {
    month: "Month 3",
    desc: "LSA generating steady leads, CPL drops to $28, 15 new reviews",
  },
  {
    month: "Month 4",
    desc: "SEO pages ranking, organic leads supplementing paid, lead volume doubles",
  },
  {
    month: "Month 5",
    desc: "Full system running — 120+ leads/month, $23 avg CPL, 47 total reviews",
  },
];

const beforeAfter = [
  { label: "Monthly Leads", before: "40", after: "120+" },
  { label: "Cost per Lead", before: "$65+", after: "$23" },
  { label: "Google Reviews", before: "8", after: "55" },
  { label: "Monthly Revenue", before: "$18K", after: "$51K" },
];

const barData = [
  { label: "Monthly Leads", before: 33, after: 100, beforeVal: "40", afterVal: "120+" },
  { label: "CPL", before: 100, after: 35, beforeVal: "$65", afterVal: "$23" },
  { label: "Monthly Revenue", before: 35, after: 100, beforeVal: "$18K", afterVal: "$51K" },
];

export default function ExteriorCleaningFlorida() {
  return (
    <>
      <JsonLd data={schema} />

      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        aria-labelledby="cs-hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-[10%] right-[8%] w-80 h-80 bg-accent/[0.07] rounded-full blur-3xl animate-float-1" />
          <div className="absolute bottom-[5%] left-[3%] w-[28rem] h-[28rem] bg-accent/[0.04] rounded-full blur-3xl animate-float-2" />
          <div className="absolute top-[50%] left-[40%] w-64 h-64 bg-emerald-500/[0.04] rounded-full blur-3xl animate-float-3" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <Link
              href="/case-studies"
              className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1 mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Case Studies
            </Link>
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal variant="blur" delay={100}>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Meta Ads", "Google LSA", "SEO"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted text-sm font-medium mb-3">
                Window Cleaning &amp; Pressure Washing &middot; Central Florida
              </p>
              <h1
                id="cs-hero-heading"
                className="font-[family-name:var(--font-jakarta)] text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-6"
              >
                From referrals to{" "}
                <span className="text-gradient-animated">3x lead volume</span>
                <br className="hidden md:block" /> in 5 months
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="blur" delay={200}>
              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-4">
                A local exterior cleaning company with zero online presence
                needed a predictable lead engine. Hyper-local paid ads, Google
                LSA, and service-area SEO pages built a system that delivers
                120+ qualified leads every month at $23 CPL.
              </p>
              <p className="text-muted text-sm">
                Timeline: 5 months &middot; Industry: Home Services
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── KPI Cards ─── */}
      <section className="py-16 md:py-20 border-b border-border" aria-label="Key results">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kpis.map((kpi, i) => (
              <ScrollReveal key={kpi.label} variant="blur" delay={i * 100}>
                <div className="border border-border rounded-2xl p-8 card-hover bg-white text-center">
                  <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground mb-2">
                    <CountUp
                      end={kpi.end}
                      prefix={kpi.prefix}
                      suffix={kpi.suffix}
                      decimals={kpi.decimals}
                      duration={kpi.duration}
                    />
                  </p>
                  <p className="text-xs text-muted uppercase tracking-wider font-medium">
                    {kpi.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Challenge ─── */}
      <section className="py-24 md:py-32" aria-labelledby="challenge-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <ScrollReveal variant="blur">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                The Challenge
              </p>
              <h2
                id="challenge-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              >
                No online presence, no tracking, no predictability
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="blur" delay={100}>
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  This Central Florida exterior cleaning business had built a
                  solid reputation through word of mouth, but growth had
                  plateaued. Revenue swung wildly with the seasons — summers
                  brought a steep drop in demand, and there was no system in
                  place to fill the gap.
                </p>
                <p>
                  The business relied entirely on referrals, averaging around 40
                  leads per month with no way to scale. There was no website
                  optimized for local search, no paid advertising, no review
                  strategy, and no tracking or attribution to measure what was
                  working.
                </p>
                <p>
                  With CPLs in the home services industry averaging $65 or more,
                  the client needed a cost-effective strategy that could generate
                  consistent leads year-round — not just during peak seasons.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── The Strategy ─── */}
      <section
        className="bg-foreground text-white py-24 md:py-32"
        aria-labelledby="strategy-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              The Strategy
            </p>
            <h2
              id="strategy-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            >
              Hyper-local ads, LSA, and SEO — layered for coverage
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mb-14">
              The plan was straightforward: show up everywhere homeowners in
              Central Florida look when they need exterior cleaning — and make
              it easy to book.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {strategySteps.map((step, i) => (
              <ScrollReveal key={step.title} variant="blur" delay={i * 100}>
                <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900/50 backdrop-blur-sm h-full">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 text-accent font-bold text-sm flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-jakarta)] text-lg font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Results — Before / After ─── */}
      <section className="py-24 md:py-32" aria-labelledby="results-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              The Results
            </p>
            <h2
              id="results-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-14"
            >
              Before vs. after — side by side
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Card */}
            <ScrollReveal variant="blur" delay={100}>
              <div className="border border-red-200 rounded-2xl p-8 bg-red-50/50 h-full">
                <p className="text-red-500 font-semibold text-xs uppercase tracking-widest mb-6">
                  Before
                </p>
                <div className="space-y-6">
                  {beforeAfter.map((item) => (
                    <div key={`before-${item.label}`}>
                      <p className="text-muted text-sm font-medium mb-1">
                        {item.label}
                      </p>
                      <p className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-red-500/70">
                        {item.before}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* After Card */}
            <ScrollReveal variant="blur" delay={200}>
              <div className="border border-emerald-200 rounded-2xl p-8 bg-emerald-50/50 h-full">
                <p className="text-success font-semibold text-xs uppercase tracking-widest mb-6">
                  After
                </p>
                <div className="space-y-6">
                  {beforeAfter.map((item) => (
                    <div key={`after-${item.label}`}>
                      <p className="text-muted text-sm font-medium mb-1">
                        {item.label}
                      </p>
                      <p className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-success">
                        {item.after}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Bar Chart ─── */}
      <section
        className="bg-foreground text-white py-24 md:py-32"
        aria-labelledby="chart-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              Performance Comparison
            </p>
            <h2
              id="chart-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-14"
            >
              The numbers, visualized
            </h2>
          </ScrollReveal>

          <div className="space-y-10 max-w-3xl">
            {barData.map((bar, i) => (
              <ScrollReveal key={bar.label} variant="blur" delay={i * 150}>
                <div>
                  <p className="text-sm font-semibold text-zinc-300 mb-3">
                    {bar.label}
                  </p>
                  {/* Before bar */}
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs text-zinc-500 w-14 shrink-0">
                      Before
                    </span>
                    <div className="flex-1 h-10 bg-zinc-800 rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-red-500/40 rounded-lg flex items-center px-3"
                        style={{ width: `${bar.before}%` }}
                      >
                        <span className="text-xs font-bold text-white/80">
                          {bar.beforeVal}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* After bar */}
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-zinc-500 w-14 shrink-0">
                      After
                    </span>
                    <div className="flex-1 h-10 bg-zinc-800 rounded-lg overflow-hidden">
                      <div
                        className="relative h-full bg-gradient-to-r from-accent to-emerald-500 rounded-lg flex items-center px-3 overflow-hidden bar-shimmer"
                        style={{ width: `${bar.after}%` }}
                      >
                        <span className="text-xs font-bold text-white relative z-10">
                          {bar.afterVal}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Campaign Timeline ─── */}
      <section className="py-24 md:py-32" aria-labelledby="timeline-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              Campaign Timeline
            </p>
            <h2
              id="timeline-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-14"
            >
              5 months from zero to 120+ leads
            </h2>
          </ScrollReveal>

          <div className="relative max-w-2xl">
            {/* Vertical line */}
            <div
              className="absolute left-[19px] top-0 bottom-0 w-px bg-border"
              aria-hidden="true"
            />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.month} variant="blur" delay={i * 120}>
                  <div className="flex gap-6">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                          i === timeline.length - 1
                            ? "bg-accent border-accent text-white"
                            : "bg-white border-border text-muted"
                        }`}
                      >
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="border border-border rounded-2xl p-6 card-hover bg-white flex-1">
                      <p className="font-[family-name:var(--font-jakarta)] font-bold text-foreground mb-1">
                        {item.month}
                      </p>
                      <p className="text-muted text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Key Takeaway ─── */}
      <section
        className="bg-foreground text-white py-24 md:py-32"
        aria-labelledby="takeaway-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="max-w-3xl mx-auto">
              <div className="border border-zinc-800 rounded-2xl p-10 md:p-14 bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden animate-border-pulse">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">
                  Key Takeaway
                </p>
                <h2
                  id="takeaway-heading"
                  className="sr-only"
                >
                  Key Takeaway
                </h2>
                <blockquote className="font-[family-name:var(--font-jakarta)] text-xl md:text-2xl font-bold leading-relaxed text-zinc-200">
                  &ldquo;Local service businesses don&apos;t need complex
                  marketing funnels. They need to show up where homeowners are
                  already looking — and make it easy to say yes. A combination
                  of hyper-local paid ads, Google LSA, and a systematic review
                  strategy built a lead engine that works year-round.&rdquo;
                </blockquote>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden" aria-label="Call to action">
        <div className="bg-gradient-cta py-24 md:py-32 relative">
          <div
            className="absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-3xl animate-float-2" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6">
            <ScrollReveal variant="blur">
              <div className="text-center">
                <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-6">
                  Get Similar Results
                </p>
                <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                  Ready to fill your calendar
                  <br className="hidden md:block" /> with qualified leads?
                </h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                  If you&apos;re a local service business relying on referrals,
                  there&apos;s a faster way to grow. Let&apos;s talk about
                  building your lead engine.
                </p>
                <Link
                  href="/contact"
                  className="btn-shine group inline-flex items-center gap-2 bg-white text-foreground font-bold px-12 py-5 rounded-xl hover:bg-zinc-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base animate-glow"
                >
                  Get Similar Results
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

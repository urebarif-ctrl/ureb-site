import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountUp } from "@/components/count-up";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "EV Charger Installer Case Study — 890 Qualified Leads & $3.4M Pipeline",
  description:
    "How a multi-state EV charger installation company generated 890 qualified leads and built a $3.4M pipeline in 6 months with Google Ads, LinkedIn Ads, and SEO. Full case study by Ureb Arif.",
  alternates: {
    canonical: `${SITE_URL}/case-studies/ev-charger-installer`,
  },
  openGraph: {
    title: "EV Charger Installer Case Study — 890 Leads in 6 Months | Ureb Arif",
    description:
      "CPL dropped 73% from $156 to $42, 28% commercial close rate, $3.4M pipeline built in 6 months. Multi-channel growth strategy for EV charger installer.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "EV Charger Installation Company Case Study — 890 Qualified Leads & $3.4M Pipeline in 6 Months",
  description:
    "How a multi-state EV charger installation company generated 890 qualified leads and built a $3.4M pipeline using Google Ads, LinkedIn Ads, and SEO content strategy.",
  author: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  publisher: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  url: `${SITE_URL}/case-studies/ev-charger-installer`,
  mainEntityOfPage: `${SITE_URL}/case-studies/ev-charger-installer`,
  about: {
    "@type": "Service",
    name: "Multi-Channel Performance Marketing",
    serviceType: "Digital Advertising & SEO",
  },
};

const strategySteps = [
  {
    num: "01",
    title: "Market Segmentation",
    desc: "Separated B2B (commercial property managers, fleet operators, HOAs) from B2C (homeowners with EVs). Built distinct messaging, landing pages, and conversion funnels for each.",
  },
  {
    num: "02",
    title: "Google Ads — Intent Capture",
    desc: 'Targeted high-intent keywords: "EV charger installation," "commercial EV charging," "home EV charger installer." Created separate campaigns for residential vs. commercial with location-specific ad copy.',
  },
  {
    num: "03",
    title: "LinkedIn B2B Campaigns",
    desc: "Targeted commercial property managers, facility directors, and fleet managers on LinkedIn. Used lead gen forms with whitepapers and ROI calculators as lead magnets.",
  },
  {
    num: "04",
    title: "SEO Content Strategy",
    desc: 'Published 24 in-depth guides: "Cost of EV charger installation," "Commercial EV charging ROI," "Home EV charger buying guide," and more. Built topical authority and captured long-tail search traffic.',
  },
  {
    num: "05",
    title: "Lead Nurture & Scoring",
    desc: "Implemented lead scoring based on property type, budget range, and engagement level. Hot leads routed to sales immediately; warm leads entered nurture sequences.",
  },
  {
    num: "06",
    title: "Multi-State Scaling",
    desc: "Started in 2 states, expanded to 5 as campaigns matured. Replicated winning strategies per market while adjusting for local competition and demand.",
  },
];

const timelineMilestones = [
  {
    month: "Month 1",
    label:
      "Market research, segmentation, initial Google Ads and landing pages",
  },
  {
    month: "Month 2",
    label:
      "LinkedIn campaigns live, first commercial leads, SEO content publishing begins",
  },
  {
    month: "Month 3",
    label: "CPL drops to $78, pipeline building, nurture sequences active",
  },
  {
    month: "Month 4",
    label:
      "Expansion to 3rd state, SEO content ranking, commercial close rate improving",
  },
  {
    month: "Month 5",
    label: "5-state coverage, CPL at $48, pipeline hits $2M",
  },
  {
    month: "Month 6",
    label:
      "Full maturity — 890 total leads, $42 CPL, $3.4M pipeline, 28% commercial close rate",
  },
];

export default function EvChargerInstaller() {
  return (
    <>
      <JsonLd data={schema} />

      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-[10%] right-[8%] w-80 h-80 bg-accent/[0.07] rounded-full blur-3xl animate-float-1" />
          <div className="absolute bottom-[5%] left-[3%] w-[28rem] h-[28rem] bg-accent/[0.04] rounded-full blur-3xl animate-float-2" />
          <div className="absolute top-[50%] left-[40%] w-64 h-64 bg-purple-500/[0.03] rounded-full blur-3xl animate-float-3" />
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
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    EV Charger Installation Company
                  </p>
                  <p className="text-xs text-muted">Multi-State Operations</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={200}>
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                Case Study &middot; Clean Energy
              </p>
              <h1
                id="hero-heading"
                className="font-[family-name:var(--font-jakarta)] text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-6"
              >
                From zero presence to{" "}
                <span className="text-gradient-animated">
                  890 qualified leads
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={300}>
              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
                A multi-state EV charger installer had no digital presence in a
                new market. In 6 months, we built a multi-channel system across
                Google Ads, LinkedIn, and SEO that dropped CPL from $156 to $42
                and generated a $3.4M pipeline.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={400}>
              <div className="flex flex-wrap gap-2">
                {["Google Ads", "LinkedIn Ads", "SEO"].map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 text-xs font-medium bg-surface border border-border rounded-lg text-muted"
                  >
                    {p}
                  </span>
                ))}
                <span className="px-3 py-1.5 text-xs font-medium bg-surface border border-border rounded-lg text-muted">
                  6-month engagement
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── KPI Cards ─── */}
      <section
        className="py-20 md:py-28 border-t border-border"
        aria-label="Key results"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: "Qualified Leads",
                  end: 890,
                  suffix: "",
                  decimals: 0,
                  duration: 2200,
                },
                {
                  label: "CPL Reduction",
                  end: 73,
                  suffix: "%",
                  decimals: 0,
                  duration: 2000,
                },
                {
                  label: "Commercial Close Rate",
                  end: 28,
                  suffix: "%",
                  decimals: 0,
                  duration: 2400,
                },
                {
                  label: "Pipeline Value",
                  end: 3.4,
                  prefix: "$",
                  suffix: "M",
                  decimals: 1,
                  duration: 2000,
                },
              ].map((kpi, i) => (
                <ScrollReveal key={kpi.label} variant="blur" delay={i * 100}>
                  <div className="border border-border rounded-2xl p-8 card-hover bg-white text-center">
                    <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-accent mb-2">
                      <CountUp
                        end={kpi.end}
                        prefix={kpi.prefix}
                        suffix={kpi.suffix}
                        decimals={kpi.decimals}
                        duration={kpi.duration}
                      />
                    </p>
                    <p className="text-sm text-muted font-medium">
                      {kpi.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── The Challenge ─── */}
      <section
        className="bg-foreground text-white py-24 md:py-32"
        aria-labelledby="challenge-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal variant="blur">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                The Challenge
              </p>
              <h2
                id="challenge-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              >
                New market, zero brand awareness, long sales cycles
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                The company was entering a market with no established digital
                presence. Both B2B commercial and B2C residential segments had
                long sales cycles that required prospect education before
                conversion. Without brand recognition, they were paying $156 per
                lead with minimal pipeline.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={200}>
              <div className="space-y-4">
                {[
                  {
                    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    label: "$156 cost per lead",
                    detail:
                      "Unsustainable CPL with no brand equity to lower it",
                  },
                  {
                    icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                    label: "Zero digital presence",
                    detail:
                      "No SEO rankings, no paid history, no audience data",
                  },
                  {
                    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
                    label: "Long, complex sales cycles",
                    detail:
                      "B2B and B2C prospects needed education before converting",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border border-zinc-800 rounded-2xl p-6 bg-zinc-900/50 backdrop-blur-sm flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="text-sm text-zinc-400 mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── The Strategy ─── */}
      <section className="py-24 md:py-32" aria-labelledby="strategy-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                The Strategy
              </p>
              <h2
                id="strategy-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                Educate first, convert second
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategySteps.map((step, i) => (
              <ScrollReveal key={step.num} variant="blur" delay={i * 100}>
                <div className="border border-border rounded-2xl p-8 card-hover bg-white h-full">
                  <span className="font-[family-name:var(--font-jakarta)] text-5xl font-extrabold text-accent/15 leading-none">
                    {step.num}
                  </span>
                  <h3 className="font-[family-name:var(--font-jakarta)] text-lg font-bold text-foreground mt-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Results — Before / After ─── */}
      <section
        className="bg-foreground text-white py-24 md:py-32"
        aria-labelledby="results-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                The Results
              </p>
              <h2
                id="results-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                Before vs. after — the numbers speak
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Before Card */}
            <ScrollReveal variant="blur" delay={100}>
              <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <p className="text-sm font-semibold text-red-400 uppercase tracking-widest">
                    Before
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Monthly Leads", value: "18" },
                    { label: "Cost Per Lead", value: "$156" },
                    { label: "Commercial Close Rate", value: "11%" },
                    { label: "Pipeline Value", value: "$0" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border-b border-zinc-800 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-zinc-400 text-sm">
                        {item.label}
                      </span>
                      <span className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-red-400">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* After Card */}
            <ScrollReveal variant="blur" delay={200}>
              <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/[0.03]" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <p className="text-sm font-semibold text-success uppercase tracking-widest">
                      After
                    </p>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: "Monthly Leads", value: "148+" },
                      { label: "Cost Per Lead", value: "$42" },
                      { label: "Commercial Close Rate", value: "28%" },
                      { label: "Pipeline Value", value: "$3.4M" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between border-b border-zinc-800 pb-4 last:border-0 last:pb-0"
                      >
                        <span className="text-zinc-400 text-sm">
                          {item.label}
                        </span>
                        <span className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-success">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ─── Bar Chart Visualization ─── */}
          <ScrollReveal variant="blur" delay={100}>
            <div className="border border-zinc-800 rounded-2xl p-8 md:p-10 bg-zinc-900/50 backdrop-blur-sm">
              <h3 className="font-[family-name:var(--font-jakarta)] text-xl font-bold mb-8">
                Performance comparison
              </h3>
              <div className="space-y-10">
                {/* Monthly Leads */}
                <div>
                  <p className="text-sm text-zinc-400 mb-3">Monthly Leads</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-500 w-14 shrink-0">
                        Before
                      </span>
                      <div className="flex-1 h-8 bg-zinc-800 rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-red-500/70 rounded-lg relative overflow-hidden bar-shimmer"
                          style={{ width: "12%" }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-red-400 w-16 text-right">
                        18
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-500 w-14 shrink-0">
                        After
                      </span>
                      <div className="flex-1 h-8 bg-zinc-800 rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-success rounded-lg relative overflow-hidden bar-shimmer"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-success w-16 text-right">
                        148+
                      </span>
                    </div>
                  </div>
                </div>

                {/* CPL */}
                <div>
                  <p className="text-sm text-zinc-400 mb-3">Cost Per Lead</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-500 w-14 shrink-0">
                        Before
                      </span>
                      <div className="flex-1 h-8 bg-zinc-800 rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-red-500/70 rounded-lg relative overflow-hidden bar-shimmer"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-red-400 w-16 text-right">
                        $156
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-500 w-14 shrink-0">
                        After
                      </span>
                      <div className="flex-1 h-8 bg-zinc-800 rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-success rounded-lg relative overflow-hidden bar-shimmer"
                          style={{ width: "27%" }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-success w-16 text-right">
                        $42
                      </span>
                    </div>
                  </div>
                </div>

                {/* Close Rate */}
                <div>
                  <p className="text-sm text-zinc-400 mb-3">
                    Commercial Close Rate
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-500 w-14 shrink-0">
                        Before
                      </span>
                      <div className="flex-1 h-8 bg-zinc-800 rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-red-500/70 rounded-lg relative overflow-hidden bar-shimmer"
                          style={{ width: "39%" }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-red-400 w-16 text-right">
                        11%
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-500 w-14 shrink-0">
                        After
                      </span>
                      <div className="flex-1 h-8 bg-zinc-800 rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-lg relative overflow-hidden bar-shimmer"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-accent w-16 text-right">
                        28%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Campaign Timeline ─── */}
      <section className="py-24 md:py-32" aria-labelledby="timeline-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                Timeline
              </p>
              <h2
                id="timeline-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                6 months from zero to $3.4M pipeline
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {timelineMilestones.map((milestone, i) => (
              <ScrollReveal
                key={milestone.month}
                variant="blur"
                delay={i * 100}
              >
                <div className="flex gap-6 relative">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 shrink-0 ${
                        i === timelineMilestones.length - 1
                          ? "bg-accent border-accent"
                          : "bg-white border-accent"
                      }`}
                    />
                    {i < timelineMilestones.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-10">
                    <p className="font-[family-name:var(--font-jakarta)] text-sm font-bold text-accent mb-1">
                      {milestone.month}
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      {milestone.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
              <div className="border border-zinc-800 rounded-2xl p-10 md:p-14 bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-2xl" />
                <svg
                  className="w-10 h-10 text-accent/30 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">
                  Key Takeaway
                </p>
                <blockquote
                  id="takeaway-heading"
                  className="font-[family-name:var(--font-jakarta)] text-xl md:text-2xl font-bold leading-snug text-white mb-6"
                >
                  New markets reward the companies that educate first and sell
                  second. By combining intent-capture ads with a robust content
                  strategy, we built authority and pipeline simultaneously. The
                  SEO content we published in month 2 is still generating leads
                  today — that&apos;s the compounding power of content-led
                  growth.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">UA</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Ureb Arif
                    </p>
                    <p className="text-xs text-zinc-500">
                      Growth Marketing Consultant
                    </p>
                  </div>
                </div>
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
                  Ready to build your
                  <br className="hidden md:block" /> pipeline?
                </h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                  Whether you&apos;re entering a new market or scaling an
                  existing one — I&apos;ll build the multi-channel system that
                  turns search intent into qualified pipeline.
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

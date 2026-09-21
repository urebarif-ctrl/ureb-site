import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountUp } from "@/components/count-up";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Veterinary Clinic Case Study — 180% More Appointments with Local SEO & Google Ads",
  description:
    "How a multi-location veterinary clinic in Texas achieved 180% more booked appointments, $18 CPA, and #1 Google Maps ranking for 2 of 3 locations. Full case study by Ureb Arif.",
  alternates: {
    canonical: `${SITE_URL}/case-studies/veterinary-clinic-texas`,
  },
  openGraph: {
    title: "Veterinary Clinic Case Study — 180% More Appointments | Ureb Arif",
    description:
      "180% more booked appointments, $18 CPA, #1 Google Maps for 2/3 locations. Multi-location Google Ads and local SEO strategy for a Texas veterinary clinic.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Multi-Location Veterinary Clinic Case Study — 180% More Appointments",
  description:
    "How a multi-location veterinary clinic in Texas achieved 180% more booked appointments and $18 CPA using Google Ads, local SEO, and Google Business Profile optimization.",
  author: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  publisher: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  url: `${SITE_URL}/case-studies/veterinary-clinic-texas`,
  mainEntityOfPage: `${SITE_URL}/case-studies/veterinary-clinic-texas`,
  about: {
    "@type": "Service",
    name: "Multi-Location Local SEO & Google Ads",
    serviceType: "Digital Advertising",
  },
};

const strategySteps = [
  {
    num: "01",
    title: "Multi-Location Audit",
    desc: "Assessed each location's online presence individually. Found inconsistent NAP data, duplicate listings, and zero conversion tracking across all three.",
  },
  {
    num: "02",
    title: "Conversion Tracking Setup",
    desc: "Implemented call tracking, online booking form tracking, and appointment confirmation events. Built custom dashboards per location for transparent reporting.",
  },
  {
    num: "03",
    title: "Google Ads — High Intent Capture",
    desc: 'Targeted keywords like "vet near me," "emergency vet [city]," and "pet vaccinations [area]." Created location-specific ad groups with unique landing pages per clinic.',
  },
  {
    num: "04",
    title: "Local SEO & GBP Optimization",
    desc: "Cleaned up all 3 Google Business Profiles. Added photos, updated services, responded to reviews, and posted weekly updates. Built local citations and backlinks.",
  },
  {
    num: "05",
    title: "Content & Review Strategy",
    desc: "Created blog content targeting long-tail veterinary keywords. Implemented a post-visit review request system that generated 60+ new reviews across locations.",
  },
  {
    num: "06",
    title: "Budget Allocation by Location",
    desc: "Analyzed per-location performance weekly. Shifted budget to the highest-performing location during ramp-up, then rebalanced as all three improved.",
  },
];

const timelineMilestones = [
  {
    month: "Month 1",
    label: "Audit, tracking setup, GBP cleanup, initial campaign launch",
  },
  {
    month: "Month 2",
    label:
      "First appointment data flowing, keyword refinement, review system active",
  },
  {
    month: "Month 3",
    label:
      "Location 1 hits #1 Google Maps, appointment bookings up 60%",
  },
  {
    month: "Month 4",
    label:
      "Location 2 reaches #1, all three locations generating steady leads",
  },
  {
    month: "Month 5",
    label: "SEO content ranking, organic appointments supplementing paid",
  },
  {
    month: "Month 6",
    label:
      "Full system — 180% more appointments, $18 CPA, 2/3 locations #1",
  },
];

export default function VeterinaryClinicTexas() {
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
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Multi-Location Veterinary Clinic
                  </p>
                  <p className="text-xs text-muted">Texas &middot; 3 Locations</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={200}>
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                Case Study &middot; Veterinary / Local Services
              </p>
              <h1
                id="hero-heading"
                className="font-[family-name:var(--font-jakarta)] text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-6"
              >
                From page 2 to #1 Maps —{" "}
                <span className="text-gradient-animated">
                  180% more appointments
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={300}>
              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
                A 3-location veterinary clinic in Texas was relying on walk-ins
                with poor Google visibility and no conversion tracking. In 6
                months, we built a per-location system that drove 180% more
                booked appointments at $18 CPA — with 2 of 3 locations ranking
                #1 on Google Maps.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={400}>
              <div className="flex flex-wrap gap-2">
                {["Google Ads", "SEO", "Google Business Profile"].map((p) => (
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
                  label: "More Appointments",
                  end: 180,
                  suffix: "%",
                  decimals: 0,
                  duration: 2200,
                },
                {
                  label: "#1 Maps Ranking",
                  end: 2,
                  suffix: "/3",
                  decimals: 0,
                  duration: 1800,
                  prefix: "",
                },
                {
                  label: "Cost Per Appointment",
                  end: 18,
                  prefix: "$",
                  suffix: "",
                  decimals: 0,
                  duration: 2000,
                },
                {
                  label: "New Patient Growth",
                  end: 45,
                  suffix: "%",
                  decimals: 0,
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
                Low visibility, no tracking, and reliance on walk-ins
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                With 3 locations across Texas, the clinic had inconsistent
                Google Business Profiles, sat on page 2-3 for most keywords,
                and had zero conversion tracking in place. Appointment bookings
                were low and there was no system to measure what was working —
                growth depended almost entirely on walk-in traffic.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={200}>
              <div className="space-y-4">
                {[
                  {
                    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z",
                    label: "Page 2-3 Google rankings",
                    detail:
                      "Invisible for high-intent searches across all locations",
                  },
                  {
                    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
                    label: "Zero conversion tracking",
                    detail: "No way to measure which channels drove bookings",
                  },
                  {
                    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
                    label: "Inconsistent GBP listings",
                    detail:
                      "Duplicate profiles, wrong NAP data, missing services",
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
                Per-location strategy, not one-size-fits-all
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
                    { label: "Monthly Appointments", value: "85" },
                    { label: "Google Maps Ranking", value: "Page 2-3" },
                    { label: "Cost Per Appointment", value: "$52" },
                    { label: "New Patients / Month", value: "31" },
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
                      { label: "Monthly Appointments", value: "238" },
                      { label: "Google Maps Ranking", value: "#1 (2/3)" },
                      { label: "Cost Per Appointment", value: "$18" },
                      { label: "New Patients / Month", value: "45" },
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
                {/* Monthly Appointments */}
                <div>
                  <p className="text-sm text-zinc-400 mb-3">
                    Monthly Appointments
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-500 w-14 shrink-0">
                        Before
                      </span>
                      <div className="flex-1 h-8 bg-zinc-800 rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-red-500/70 rounded-lg relative overflow-hidden bar-shimmer"
                          style={{ width: "36%" }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-red-400 w-16 text-right">
                        85
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
                        238
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cost Per Appointment */}
                <div>
                  <p className="text-sm text-zinc-400 mb-3">
                    Cost Per Appointment
                  </p>
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
                        $52
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-500 w-14 shrink-0">
                        After
                      </span>
                      <div className="flex-1 h-8 bg-zinc-800 rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-success rounded-lg relative overflow-hidden bar-shimmer"
                          style={{ width: "35%" }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-success w-16 text-right">
                        $18
                      </span>
                    </div>
                  </div>
                </div>

                {/* New Patients */}
                <div>
                  <p className="text-sm text-zinc-400 mb-3">
                    New Patients / Month
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-500 w-14 shrink-0">
                        Before
                      </span>
                      <div className="flex-1 h-8 bg-zinc-800 rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-red-500/70 rounded-lg relative overflow-hidden bar-shimmer"
                          style={{ width: "69%" }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-red-400 w-16 text-right">
                        31
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
                        45
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
                6 months from audit to 180% more appointments
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
                  Multi-location businesses need per-location strategies, not
                  one-size-fits-all campaigns. By treating each clinic as its
                  own market with its own keywords, ads, and GBP profile, we
                  built a system where every location performs — not just the
                  flagship.
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
                  Ready to fill your
                  <br className="hidden md:block" /> appointment book?
                </h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                  Whether you have one location or ten — I&apos;ll build a
                  system that drives booked appointments, not just clicks.
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

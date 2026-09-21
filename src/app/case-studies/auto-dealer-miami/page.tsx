import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountUp } from "@/components/count-up";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Auto Dealership Case Study — 67% Lower CPL with Geo-Targeted Ads",
  description:
    "How a South Florida automotive dealership cut cost per lead by 67% and generated $1.2M in attributed revenue using geo-targeted inventory ads, dynamic retargeting, and Google Business Profile optimization.",
  alternates: { canonical: `${SITE_URL}/case-studies/auto-dealer-miami` },
  openGraph: {
    title: "Automotive Dealership — 67% Lower CPL | Ureb Arif",
    description:
      "From $340 CPL to $112. 215 qualified leads/month. $1.2M attributed revenue in Q1. See the full strategy.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Auto Dealership Case Study — 67% Lower CPL with Geo-Targeted Ads",
  description:
    "How a South Florida automotive dealership cut cost per lead by 67% and generated $1.2M in attributed revenue in Q1.",
  author: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  publisher: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  url: `${SITE_URL}/case-studies/auto-dealer-miami`,
  mainEntityOfPage: `${SITE_URL}/case-studies/auto-dealer-miami`,
};

const strategySteps = [
  {
    num: "01",
    title: "Market Analysis & Competitive Audit",
    desc: "Mapped the competitive landscape across South Florida. Identified gaps in competitor ad coverage and high-opportunity zip codes.",
  },
  {
    num: "02",
    title: "Geo-Targeted Inventory Campaigns",
    desc: "Built dynamic inventory ads synced with dealer management system. Targeted users within 25-mile radius by make, model, and price range interests.",
  },
  {
    num: "03",
    title: "Dynamic Retargeting",
    desc: "Retargeted website visitors with the specific vehicles they viewed. Created urgency with limited-time offers and real-time inventory counts.",
  },
  {
    num: "04",
    title: "Call Tracking & Attribution",
    desc: "Implemented call tracking across all campaigns. Every phone call, form submission, and showroom visit attributed to specific ads and keywords.",
  },
  {
    num: "05",
    title: "Google Business Profile Optimization",
    desc: "Optimized 3 GBP listings with updated inventory, photos, and review management. Built local search authority.",
  },
  {
    num: "06",
    title: "Creative Testing & Scaling",
    desc: "Tested 40+ ad variations across video, carousel, and single image. Scaled winning creatives and paused underperformers weekly.",
  },
];

const timeline = [
  {
    month: "Month 1",
    title: "Foundation",
    desc: "Audit, tracking setup, inventory feed integration, initial campaign launch.",
  },
  {
    month: "Month 2",
    title: "Retargeting Live",
    desc: "Dynamic retargeting live, first lead quality improvements visible.",
  },
  {
    month: "Month 3",
    title: "Scaling",
    desc: "GBP optimization complete, CPL drops below $150, scaling profitable campaigns.",
  },
  {
    month: "Month 4",
    title: "Full Maturity",
    desc: "215 leads/month, $1.2M attributed revenue, 67% CPL reduction achieved.",
  },
];

const barData = [
  {
    label: "Cost Per Lead",
    before: { value: "$340", width: "100%" },
    after: { value: "$112", width: "33%" },
  },
  {
    label: "Monthly Leads",
    before: { value: "68", width: "32%" },
    after: { value: "215", width: "100%" },
  },
  {
    label: "Quarterly Revenue",
    before: { value: "$310K", width: "26%" },
    after: { value: "$1.2M", width: "100%" },
  },
];

export default function AutoDealerMiami() {
  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="bg-gradient-hero py-20 md:py-28" aria-labelledby="hero-heading">
        <div className="max-w-6xl mx-auto px-6">
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            All Case Studies
          </Link>

          <ScrollReveal variant="blur">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
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
                    d="M8 17h.01M16 17h.01M3 11l1.5-5.25A2 2 0 016.4 4h11.2a2 2 0 011.9 1.75L21 11M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6M3 11h18"
                  />
                </svg>
              </div>
              <div>
                <p className="text-accent font-semibold text-xs uppercase tracking-widest">
                  Case Study
                </p>
                <p className="text-muted text-sm">
                  Automotive Dealership &middot; South Florida
                </p>
              </div>
            </div>

            <h1
              id="hero-heading"
              className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
            >
              <span className="text-gradient-animated">67% Lower CPL</span>{" "}
              <br className="hidden md:block" />
              for a South Florida Dealership
            </h1>

            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-4">
              How geo-targeted inventory ads and dynamic retargeting turned
              declining showroom traffic into 215 qualified leads per month and
              $1.2M in attributed revenue.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Meta Ads", "Google Ads", "Google Business Profile"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                )
              )}
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-100 text-muted border border-border">
                4-Month Engagement
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="py-16 md:py-20 -mt-8" aria-label="Key metrics">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                label: "Lower CPL",
                end: 67,
                suffix: "%",
                sub: "$340 → $112",
              },
              {
                label: "Qualified Leads/Mo",
                end: 215,
                suffix: "",
                sub: "Up from 68",
              },
              {
                label: "Attributed Revenue",
                end: 1.2,
                prefix: "$",
                suffix: "M",
                decimals: 1,
                sub: "Q1 total",
              },
              {
                label: "Return on Ad Spend",
                end: 3.2,
                suffix: "x",
                decimals: 1,
                sub: "ROAS",
              },
            ].map((kpi, i) => (
              <ScrollReveal key={kpi.label} variant="blur" delay={i * 100}>
                <div className="border border-border rounded-2xl p-6 md:p-8 bg-white card-hover text-center">
                  <CountUp
                    end={kpi.end}
                    prefix={kpi.prefix}
                    suffix={kpi.suffix}
                    decimals={kpi.decimals}
                    duration={2200}
                    className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold text-accent"
                  />
                  <p className="font-semibold text-sm mt-2">{kpi.label}</p>
                  <p className="text-muted text-xs mt-1">{kpi.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 md:py-28" aria-labelledby="challenge-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="max-w-3xl">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                The Challenge
              </p>
              <h2
                id="challenge-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
              >
                Competing Against Dealer Groups with 5x the Budget
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                This South Florida dealership was losing ground fast. Showroom
                traffic was declining, their cost per lead had climbed above
                $340, and they were competing against large dealer groups with
                massive budgets and established digital presences.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Declining showroom traffic",
                  "Cost per lead above $340",
                  "Competing with large dealer groups",
                  "Outdated digital presence",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-muted"
                  >
                    <svg
                      className="w-5 h-5 text-red-500 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Strategy */}
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
              Smarter Targeting, Not Bigger Budgets
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-12">
              Instead of trying to outspend the competition, we focused on
              precision — geo-targeted ads, dynamic retargeting, and full
              attribution to double down on what actually drove showroom visits.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategySteps.map((step, i) => (
              <ScrollReveal key={step.num} variant="blur" delay={i * 80}>
                <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900/50 backdrop-blur-sm h-full">
                  <span className="text-accent font-[family-name:var(--font-jakarta)] text-3xl font-extrabold opacity-40">
                    {step.num}
                  </span>
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mt-3 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Results */}
      <section className="py-24 md:py-32" aria-labelledby="results-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              The Results
            </p>
            <h2
              id="results-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-12"
            >
              Before vs. After — By the Numbers
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Before Card */}
            <ScrollReveal variant="blur">
              <div className="border border-red-200 rounded-2xl p-8 bg-red-50/50">
                <p className="text-red-500 font-semibold text-xs uppercase tracking-widest mb-6">
                  Before
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Cost Per Lead", value: "$340" },
                    { label: "Monthly Leads", value: "68" },
                    { label: "Showroom Visits/Mo", value: "22" },
                    { label: "Quarterly Revenue", value: "$310K" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-muted text-sm">{item.label}</span>
                      <span className="font-[family-name:var(--font-jakarta)] font-extrabold text-xl text-red-500">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* After Card */}
            <ScrollReveal variant="blur" delay={100}>
              <div className="border border-green-200 rounded-2xl p-8 bg-green-50/50">
                <p className="text-success font-semibold text-xs uppercase tracking-widest mb-6">
                  After
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Cost Per Lead", value: "$112" },
                    { label: "Monthly Leads", value: "215" },
                    { label: "Showroom Visits/Mo", value: "67" },
                    { label: "Quarterly Revenue", value: "$1.2M" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-muted text-sm">{item.label}</span>
                      <span className="font-[family-name:var(--font-jakarta)] font-extrabold text-xl text-success">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bar Chart */}
          <ScrollReveal variant="blur">
            <div className="border border-border rounded-2xl p-8 md:p-10 bg-white">
              <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-8">
                Performance Comparison
              </h3>
              <div className="space-y-8">
                {barData.map((item) => (
                  <div key={item.label}>
                    <p className="text-sm font-semibold mb-3">{item.label}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted w-12 shrink-0">
                          Before
                        </span>
                        <div className="flex-1 bg-zinc-100 rounded-full h-8 overflow-hidden">
                          <div
                            className="h-full bg-zinc-400 rounded-full relative overflow-hidden flex items-center justify-end pr-3 transition-all duration-1000"
                            style={{ width: item.before.width }}
                          >
                            <span className="text-xs font-bold text-white relative z-10">
                              {item.before.value}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted w-12 shrink-0">
                          After
                        </span>
                        <div className="flex-1 bg-zinc-100 rounded-full h-8 overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full relative overflow-hidden flex items-center justify-end pr-3 bar-shimmer transition-all duration-1000"
                            style={{ width: item.after.width }}
                          >
                            <span className="text-xs font-bold text-white relative z-10">
                              {item.after.value}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-zinc-400" />
                  <span className="text-xs text-muted">Before</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-xs text-muted">After</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="bg-foreground text-white py-24 md:py-32"
        aria-labelledby="timeline-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              Campaign Timeline
            </p>
            <h2
              id="timeline-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-12"
            >
              4 Months to Full Maturity
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-zinc-700" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.month} variant="blur" delay={i * 120}>
                  <div className="relative pl-12 md:pl-16">
                    {/* Dot */}
                    <div
                      className={`absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full border-2 ${
                        i === timeline.length - 1
                          ? "bg-accent border-accent animate-border-pulse"
                          : "bg-zinc-800 border-zinc-600"
                      }`}
                    />
                    <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-1">
                      {item.month}
                    </p>
                    <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-24 md:py-32" aria-labelledby="takeaway-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="border border-accent/20 rounded-2xl p-8 md:p-12 bg-accent/5">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">
                Key Takeaway
              </p>
              <blockquote className="font-[family-name:var(--font-jakarta)] text-xl md:text-2xl font-extrabold leading-snug tracking-tight mb-6">
                &ldquo;You don&apos;t need the biggest budget to beat the big
                dealer groups. You need smarter targeting.&rdquo;
              </blockquote>
              <p className="text-muted leading-relaxed max-w-3xl">
                By focusing on high-intent signals and geo-targeting down to the
                zip code level, we outperformed competitors spending 5x more on
                broad, untargeted campaigns. Precision beats volume every time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-cta py-20" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal variant="blur">
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Get Similar Results for Your Business
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Whether you&apos;re an auto dealer or any business paying too much
              per lead — let&apos;s talk about what targeted campaigns can do
              for your numbers.
            </p>
            <Link
              href="/contact"
              className="btn-shine group inline-flex items-center gap-2 bg-white text-foreground font-bold px-12 py-5 rounded-xl hover:bg-zinc-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base animate-glow"
            >
              Get Similar Results
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

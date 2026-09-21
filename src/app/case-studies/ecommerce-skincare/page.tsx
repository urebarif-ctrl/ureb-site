import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountUp } from "@/components/count-up";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "E-commerce Skincare Brand — 5.8x ROAS | Case Study",
  description:
    "How a Shopify skincare brand went from 0.9x ROAS to 5.8x with a full-funnel Meta Ads restructure, Google Shopping campaigns, and Klaviyo email automation. 320% revenue increase in 8 months.",
  alternates: { canonical: `${SITE_URL}/case-studies/ecommerce-skincare` },
  openGraph: {
    title: "E-commerce Skincare Brand — 5.8x ROAS | Ureb Arif",
    description:
      "Full-funnel Meta Ads restructure, Google Shopping, and Klaviyo automation drove 5.8x ROAS and 320% revenue growth for a Shopify skincare brand.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "E-commerce Skincare Brand — 5.8x ROAS Case Study",
  description:
    "How a Shopify skincare brand scaled from 0.9x to 5.8x ROAS with full-funnel paid media and email automation.",
  author: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  publisher: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  url: `${SITE_URL}/case-studies/ecommerce-skincare`,
  datePublished: "2025-06-01",
  dateModified: "2025-06-01",
};

const strategySteps = [
  {
    num: "01",
    title: "Full Account Audit",
    desc: "Reviewed existing Meta campaigns, Shopify analytics, and customer data. Identified that 80% of spend was going to cold audiences with no retargeting.",
  },
  {
    num: "02",
    title: "Audience Segmentation & Creative Strategy",
    desc: "Built buyer personas from purchase data. Created separate campaign strategies for new customer acquisition vs. retention. Developed UGC-style creative that outperformed polished brand content by 3x.",
  },
  {
    num: "03",
    title: "Full-Funnel Meta Restructure",
    desc: "TOF: Broad + interest-based prospecting with video ads. MOF: Website visitor retargeting with product-specific carousel ads. BOF: Cart abandonment and past purchaser campaigns with urgency messaging.",
  },
  {
    num: "04",
    title: "Google Shopping & Search",
    desc: "Set up Google Merchant Center and Shopping campaigns. Targeted branded and category search terms. Implemented Performance Max for broad product discovery.",
  },
  {
    num: "05",
    title: "Klaviyo Email Automation",
    desc: "Built 7 automated flows: Welcome series, abandoned cart, post-purchase, win-back, VIP, browse abandonment, and replenishment reminders. Designed and wrote all email copy.",
  },
  {
    num: "06",
    title: "Retention & LTV Focus",
    desc: "Implemented subscription options, loyalty program integration, and personalized product recommendations based on purchase history. Focused budget on high-LTV customer segments.",
  },
];

const timeline = [
  {
    period: "Month 1-2",
    label: "Foundation",
    detail:
      "Audit, Klaviyo setup, Meta restructure, initial campaigns",
  },
  {
    period: "Month 3",
    label: "Expansion",
    detail:
      "Shopping campaigns live, first email flows generating revenue",
  },
  {
    period: "Month 4",
    label: "Traction",
    detail: "ROAS hits 3.2x, email contributing 15% of revenue",
  },
  {
    period: "Month 5-6",
    label: "Scaling",
    detail:
      "Scaling winning campaigns, subscription model launch, retention improving",
  },
  {
    period: "Month 7-8",
    label: "Full Maturity",
    detail:
      "5.8x ROAS, 320% revenue increase, 42% returning customers",
  },
];

const beforeAfter = [
  {
    label: "Meta ROAS",
    before: "0.9x",
    after: "5.8x",
    beforePct: 16,
    afterPct: 100,
  },
  {
    label: "Monthly Revenue",
    before: "$28K",
    after: "$118K",
    beforePct: 24,
    afterPct: 100,
  },
  {
    label: "Returning Customers",
    before: "12%",
    after: "42%",
    beforePct: 29,
    afterPct: 100,
  },
  {
    label: "Email Revenue Share",
    before: "0%",
    after: "28%",
    beforePct: 0,
    afterPct: 100,
  },
];

export default function EcommerceSkincareCaseStudy() {
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
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </span>
                <span className="text-muted text-sm font-medium">
                  E-commerce Skincare Brand &middot; Shopify
                </span>
              </div>
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                Case Study
              </p>
              <h1
                id="cs-hero-heading"
                className="font-[family-name:var(--font-jakarta)] text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-6"
              >
                From unprofitable ads to{" "}
                <span className="text-gradient-animated">5.8x ROAS</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="blur" delay={200}>
              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                A Shopify skincare brand was burning budget on Meta campaigns
                with no retargeting, no email strategy, and no attribution.
                In 8 months, we turned it into a retention-powered revenue
                machine.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={300}>
              <div className="flex flex-wrap gap-2">
                {["Meta Ads", "Google Shopping", "Klaviyo", "Shopify"].map(
                  (platform) => (
                    <span
                      key={platform}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-accent/10 text-accent"
                    >
                      {platform}
                    </span>
                  )
                )}
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 text-muted">
                  8 months
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── KPI Cards ─── */}
      <section className="py-24 md:py-32 bg-white" aria-label="Key results">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="border border-border rounded-2xl p-8 card-hover bg-white text-center">
                <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground">
                  <CountUp end={5.8} suffix="x" decimals={1} duration={2000} />
                </p>
                <p className="text-muted text-sm mt-2 font-medium">
                  ROAS on Meta
                </p>
                <p className="text-success text-xs mt-1 font-semibold">
                  from 0.9x
                </p>
              </div>
              <div className="border border-border rounded-2xl p-8 card-hover bg-white text-center">
                <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground">
                  <CountUp end={320} suffix="%" duration={2000} />
                </p>
                <p className="text-muted text-sm mt-2 font-medium">
                  Revenue Increase
                </p>
                <p className="text-success text-xs mt-1 font-semibold">
                  $28K to $118K/mo
                </p>
              </div>
              <div className="border border-border rounded-2xl p-8 card-hover bg-white text-center">
                <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground">
                  <CountUp end={42} suffix="%" duration={2000} />
                </p>
                <p className="text-muted text-sm mt-2 font-medium">
                  Returning Customers
                </p>
                <p className="text-success text-xs mt-1 font-semibold">
                  from 12%
                </p>
              </div>
              <div className="border border-border rounded-2xl p-8 card-hover bg-white text-center">
                <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground">
                  <CountUp end={28} suffix="%" duration={2000} />
                </p>
                <p className="text-muted text-sm mt-2 font-medium">
                  Email Revenue Share
                </p>
                <p className="text-success text-xs mt-1 font-semibold">
                  from 0%
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── The Challenge ─── */}
      <section
        className="py-24 md:py-32 bg-foreground text-white"
        aria-labelledby="challenge-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <ScrollReveal variant="blur">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                The Challenge
              </p>
              <h2
                id="challenge-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-8"
              >
                Burning budget with nothing to show for it
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={100}>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  The brand was scaling beyond organic social but running
                  unprofitable Meta campaigns at 0.9x ROAS -- meaning they
                  were losing money on every dollar spent. There was no email
                  strategy, customer acquisition costs were high, and they
                  were relying on influencer posts with no attribution model
                  to understand what was actually working.
                </p>
                <p>
                  80% of their ad spend was going to cold audiences with
                  zero retargeting. Customers would visit, browse, abandon
                  carts, and never hear from the brand again. The entire
                  revenue model depended on new customer acquisition with
                  no retention engine.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {[
                  "0.9x ROAS -- losing money on ads",
                  "No email or retention strategy",
                  "80% spend on cold audiences",
                  "No attribution from influencer posts",
                  "High customer acquisition cost",
                  "Zero retargeting campaigns",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 text-zinc-400 text-sm"
                  >
                    <svg
                      className="w-5 h-5 text-red-400 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {point}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── The Strategy ─── */}
      <section
        className="py-24 md:py-32"
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
              Full-funnel restructure with a retention-first approach
            </h2>
            <p className="text-muted text-lg max-w-2xl mb-14">
              We rebuilt the entire acquisition and retention engine from
              scratch -- Meta Ads, Google Shopping, and Klaviyo working
              together as one system.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategySteps.map((step, i) => (
              <ScrollReveal key={step.num} variant="blur" delay={i * 80}>
                <div className="border border-border rounded-2xl p-8 card-hover bg-white h-full">
                  <span className="inline-block text-accent font-[family-name:var(--font-jakarta)] text-sm font-extrabold mb-3">
                    {step.num}
                  </span>
                  <h3 className="font-[family-name:var(--font-jakarta)] text-xl font-bold tracking-tight mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Results: Before / After ─── */}
      <section
        className="py-24 md:py-32 bg-foreground text-white"
        aria-labelledby="results-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              The Results
            </p>
            <h2
              id="results-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-14"
            >
              Before vs. after -- the numbers speak
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before Column */}
            <ScrollReveal variant="blur" delay={100}>
              <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <h3 className="font-[family-name:var(--font-jakarta)] text-lg font-bold text-zinc-400">
                    Before
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                      Meta ROAS
                    </p>
                    <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-zinc-400">
                      0.9x
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                      Monthly Revenue
                    </p>
                    <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-zinc-400">
                      $28K
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                      Returning Customers
                    </p>
                    <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-zinc-400">
                      12%
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                      Email Revenue Share
                    </p>
                    <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-zinc-400">
                      0%
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* After Column */}
            <ScrollReveal variant="blur" delay={200}>
              <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900/50 backdrop-blur-sm animate-border-pulse">
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-3 h-3 rounded-full bg-success" />
                  <h3 className="font-[family-name:var(--font-jakarta)] text-lg font-bold text-white">
                    After
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                      Meta ROAS
                    </p>
                    <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-accent">
                      5.8x
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                      Monthly Revenue
                    </p>
                    <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-accent">
                      $118K
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                      Returning Customers
                    </p>
                    <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-accent">
                      42%
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                      Email Revenue Share
                    </p>
                    <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-accent">
                      28%
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Bar Chart ─── */}
      <section className="py-24 md:py-32" aria-label="Performance comparison chart">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              Performance Comparison
            </p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-14">
              Growth at a glance
            </h2>
          </ScrollReveal>

          <div className="space-y-10">
            {beforeAfter.map((metric, i) => (
              <ScrollReveal key={metric.label} variant="blur" delay={i * 100}>
                <div>
                  <p className="font-[family-name:var(--font-jakarta)] font-bold text-foreground mb-3">
                    {metric.label}
                  </p>
                  {/* Before bar */}
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs text-muted w-16 shrink-0 text-right">
                      Before
                    </span>
                    <div className="flex-1 bg-zinc-100 rounded-full h-8 relative overflow-hidden">
                      <div
                        className="h-full rounded-full bg-zinc-300 flex items-center justify-end pr-3 bar-shimmer relative overflow-hidden"
                        style={{ width: `${Math.max(metric.beforePct, 4)}%` }}
                      >
                        <span className="text-xs font-bold text-zinc-600">
                          {metric.before}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* After bar */}
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted w-16 shrink-0 text-right">
                      After
                    </span>
                    <div className="flex-1 bg-zinc-100 rounded-full h-8 relative overflow-hidden">
                      <div
                        className="h-full rounded-full bg-accent flex items-center justify-end pr-3 bar-shimmer relative overflow-hidden"
                        style={{ width: `${metric.afterPct}%` }}
                      >
                        <span className="text-xs font-bold text-white">
                          {metric.after}
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
      <section
        className="py-24 md:py-32 bg-foreground text-white"
        aria-labelledby="timeline-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              Campaign Timeline
            </p>
            <h2
              id="timeline-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-14"
            >
              8 months from audit to full maturity
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-zinc-700"
              aria-hidden="true"
            />

            <div className="space-y-10">
              {timeline.map((milestone, i) => (
                <ScrollReveal key={milestone.period} variant="blur" delay={i * 100}>
                  <div className="relative pl-12 md:pl-16">
                    {/* Dot */}
                    <div
                      className={`absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                        i === timeline.length - 1
                          ? "bg-accent border-accent"
                          : "bg-zinc-800 border-zinc-600"
                      }`}
                      aria-hidden="true"
                    />
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">
                      {milestone.period}
                    </p>
                    <h3 className="font-[family-name:var(--font-jakarta)] text-lg font-bold text-white mb-1">
                      {milestone.label}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {milestone.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Key Takeaway ─── */}
      <section className="py-24 md:py-32" aria-labelledby="takeaway-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="border border-border rounded-2xl p-10 md:p-14 bg-white card-hover">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">
                Key Takeaway
              </p>
              <blockquote>
                <p
                  id="takeaway-heading"
                  className="font-[family-name:var(--font-jakarta)] text-2xl md:text-3xl font-extrabold tracking-tight text-foreground leading-snug mb-6"
                >
                  &ldquo;Most ecommerce brands pour all their budget into
                  acquiring new customers and ignore the ones they already
                  have. By building a retention engine alongside our
                  acquisition campaigns, we turned one-time buyers into
                  repeat customers -- and that&rsquo;s where the real profit
                  lives.&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">UA</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    Ureb Arif
                  </p>
                  <p className="text-muted text-xs">
                    Growth Marketing Consultant
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-24 md:py-32 bg-gradient-cta"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
              Ready to Scale?
            </p>
            <h2
              id="cta-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
            >
              Get similar results for your brand
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10">
              Whether you sell on Shopify, WooCommerce, or another platform --
              the same full-funnel approach works. Let&rsquo;s talk about
              what&rsquo;s possible for your ecommerce business.
            </p>
            <Link
              href="/contact"
              className="btn-shine group inline-flex items-center gap-2 bg-foreground text-white font-bold px-12 py-5 rounded-xl hover:bg-zinc-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base animate-glow"
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

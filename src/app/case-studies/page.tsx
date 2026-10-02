import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountUp } from "@/components/count-up";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies — Real Results from Real Campaigns",
  description:
    "See how Ureb Arif delivers measurable growth for US businesses. Case studies in Meta Ads, Google Ads, SEO, and lead generation across rehab centers, automotive dealers, ecommerce, and more.",
  alternates: { canonical: `${SITE_URL}/case-studies` },
  openGraph: {
    title: "Case Studies | Ureb Arif — Growth Marketing Consultant",
    description:
      "Real campaign results: 4.2x ROAS, 67% lower CPL, 3x lead volume. See the strategies behind the numbers.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies — Ureb Arif",
  description:
    "Performance marketing case studies showcasing real results across Meta Ads, Google Ads, SEO, and lead generation for US businesses.",
  url: `${SITE_URL}/case-studies`,
  publisher: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: `${SITE_URL}/case-studies/rehab-center-houston`,
        name: "Rehab & Recovery Center — 4.2x ROAS",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: `${SITE_URL}/case-studies/auto-dealer-miami`,
        name: "Automotive Dealership — 67% Lower CPL",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: `${SITE_URL}/case-studies/exterior-cleaning-florida`,
        name: "Window Cleaning & Pressure Washing — 3x Lead Volume",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: `${SITE_URL}/case-studies/ecommerce-skincare`,
        name: "E-commerce Skincare — 5.8x ROAS",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: `${SITE_URL}/case-studies/veterinary-clinic-texas`,
        name: "Veterinary Clinic — 180% More Appointments",
      },
      {
        "@type": "ListItem",
        position: 6,
        url: `${SITE_URL}/case-studies/ev-charger-installer`,
        name: "EV Charger Installation — 890 Qualified Leads",
      },
    ],
  },
};

type Category = "All" | "Meta Ads" | "Google Ads" | "SEO" | "Growth";

const categories: Category[] = ["All", "Meta Ads", "Google Ads", "SEO", "Growth"];

const caseStudies = [
  {
    slug: "rehab-center-houston",
    client: "Rehab & Recovery Center",
    location: "Houston, TX",
    headline: "4.2x ROAS",
    subline: "CPL dropped from $485 to $127",
    platforms: ["Meta Ads", "Google Ads", "Google Analytics"],
    categories: ["Meta Ads", "Google Ads"] as Category[],
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    timeline: "6 months",
    color: "from-red-500/10 to-pink-500/10",
    accentColor: "text-red-500",
  },
  {
    slug: "auto-dealer-miami",
    client: "Automotive Dealership",
    location: "South Florida",
    headline: "67% Lower CPL",
    subline: "215 qualified leads/month from 68",
    platforms: ["Meta Ads", "Google Ads", "Google Business Profile"],
    categories: ["Meta Ads", "Google Ads"] as Category[],
    icon: "M8 17h.01M16 17h.01M3 11l1.5-5.25A2 2 0 016.4 4h11.2a2 2 0 011.9 1.75L21 11M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6M3 11h18",
    timeline: "4 months",
    color: "from-blue-500/10 to-cyan-500/10",
    accentColor: "text-blue-500",
  },
  {
    slug: "exterior-cleaning-florida",
    client: "Window Cleaning & Pressure Washing",
    location: "Central Florida",
    headline: "3x Lead Volume",
    subline: "$23 avg CPL vs $65+ industry avg",
    platforms: ["Meta Ads", "Google LSA", "SEO"],
    categories: ["Meta Ads", "SEO"] as Category[],
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21",
    timeline: "5 months",
    color: "from-emerald-500/10 to-green-500/10",
    accentColor: "text-emerald-500",
  },
  {
    slug: "ecommerce-skincare",
    client: "E-commerce Skincare Brand",
    location: "Shopify",
    headline: "5.8x ROAS",
    subline: "320% revenue increase",
    platforms: ["Meta Ads", "Google Shopping", "Klaviyo", "Shopify"],
    categories: ["Meta Ads", "Google Ads", "Growth"] as Category[],
    icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
    timeline: "8 months",
    color: "from-purple-500/10 to-violet-500/10",
    accentColor: "text-purple-500",
  },
  {
    slug: "veterinary-clinic-texas",
    client: "Multi-Location Veterinary Clinic",
    location: "Texas",
    headline: "180% More Appointments",
    subline: "$18 cost per appointment",
    platforms: ["Google Ads", "SEO", "Google Business Profile"],
    categories: ["Google Ads", "SEO"] as Category[],
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
    timeline: "6 months",
    color: "from-amber-500/10 to-orange-500/10",
    accentColor: "text-amber-500",
  },
  {
    slug: "ev-charger-installer",
    client: "EV Charger Installation Company",
    location: "Multi-State",
    headline: "890 Qualified Leads",
    subline: "CPL dropped from $156 to $42",
    platforms: ["Google Ads", "LinkedIn Ads", "SEO"],
    categories: ["Google Ads", "SEO", "Growth"] as Category[],
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    timeline: "6 months",
    color: "from-teal-500/10 to-cyan-500/10",
    accentColor: "text-teal-500",
  },
];

export default function CaseStudies() {
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
              href="/"
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
              Home
            </Link>
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal variant="blur" delay={100}>
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">
                Case Studies
              </p>
              <h1
                id="cs-hero-heading"
                className="font-[family-name:var(--font-jakarta)] text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-6"
              >
                Real campaigns.{" "}
                <span className="text-gradient-animated">Real results.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="blur" delay={200}>
              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                Every number on this page comes from campaigns I built, managed,
                and optimized. No theoretical examples. No inflated metrics. Just
                documented outcomes from real US businesses.
              </p>
            </ScrollReveal>

            {/* ─── Stats summary ─── */}
            <ScrollReveal variant="blur" delay={300}>
              <div className="grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <p className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold text-foreground">
                    <CountUp end={6} duration={1500} />
                  </p>
                  <p className="text-xs text-muted-light mt-1 uppercase tracking-wider font-medium">
                    Industries
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold text-foreground">
                    <CountUp end={5.8} suffix="x" decimals={1} duration={2000} />
                  </p>
                  <p className="text-xs text-muted-light mt-1 uppercase tracking-wider font-medium">
                    Best ROAS
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold text-foreground">
                    <CountUp end={67} suffix="%" duration={2000} />
                  </p>
                  <p className="text-xs text-muted-light mt-1 uppercase tracking-wider font-medium">
                    Avg CPL Drop
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Documented campaign proof ─── */}
      <section className="py-16 md:py-20 bg-white border-y border-border" aria-labelledby="northcharge-proof-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <ScrollReveal variant="scale" className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-surface">
                <img
                  src="/images/northcharge-meta-ads.webp"
                  alt="NorthCharge Meta Ads campaign dashboard showing campaign results"
                  width={900}
                  height={480}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="blur" delay={120} className="lg:col-span-2">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Campaign proof</p>
              <h2 id="northcharge-proof-heading" className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold tracking-tight mb-4">
                NorthCharge Meta Ads
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                A real account view from NorthCharge showing awareness and engagement campaigns I worked with. I prefer showing the dashboard alongside the story so the work feels documented, not generic.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-foreground">31,372</p>
                  <p className="text-xs text-muted mt-1">Post engagements shown</p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-foreground">$0.004</p>
                  <p className="text-xs text-muted mt-1">Cost per engagement shown</p>
                </div>
              </div>
              <p className="text-xs text-muted-light">
                Metrics above are transcribed from the campaign screenshot shown here and refer to the specific campaign row visible in the account.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ─── Exterior cleaning documented proof ─── */}
      <section className="py-16 md:py-20 bg-surface/70 border-b border-border" aria-labelledby="exterior-proof-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <ScrollReveal variant="scale" className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-white">
                <img
                  src="/images/proof/exterior-cleaning-june.svg"
                  alt="Exterior cleaning dashboard proof recreated from a redacted June 2026 Meta Ads Manager capture"
                  width={1100}
                  height={620}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="blur" delay={120} className="lg:col-span-2">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Exterior cleaning dashboard proof</p>
              <h2 id="exterior-proof-heading" className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold tracking-tight mb-4">
                35+ accounts, with campaign evidence
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                The exterior cleaning portfolio now includes redacted June, July and August 2026 campaign proof plus the public client review for the 35+ account media-buying engagement.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl border border-border bg-white p-4">
                  <p className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold">448</p>
                  <p className="text-xs text-muted mt-1">Visible leads in the case-study sample</p>
                </div>
                <div className="rounded-xl border border-border bg-white p-4">
                  <p className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold">$13.32</p>
                  <p className="text-xs text-muted mt-1">Visible average CPL</p>
                </div>
              </div>
              <Link href="/case-studies/exterior-cleaning-448-visible-leads" className="inline-flex items-center gap-2 font-semibold text-accent hover:underline">
                View exterior cleaning proof <span aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Filter Pills ─── */}
      <section className="border-y border-border bg-white" aria-label="Filter case studies">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <ScrollReveal variant="blur">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-default ${
                    i === 0
                      ? "bg-foreground text-white"
                      : "bg-surface border border-border text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Case Studies Grid ─── */}
      <section className="py-20 md:py-28" aria-labelledby="cs-grid-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="cs-grid-heading" className="sr-only">
            All Case Studies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.slug} delay={i * 100} variant="blur">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block border border-border rounded-2xl overflow-hidden card-hover bg-white h-full"
                >
                  {/* Card top gradient */}
                  <div
                    className={`h-40 bg-gradient-to-br ${cs.color} relative flex items-center justify-center`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className={`w-8 h-8 ${cs.accentColor}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={cs.icon}
                        />
                      </svg>
                    </div>
                    <div className="absolute top-4 right-4 text-xs font-semibold text-muted bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full">
                      {cs.timeline}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <p className="text-xs text-muted font-medium mb-1">
                      {cs.client} &middot; {cs.location}
                    </p>
                    <p className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                      {cs.headline}
                    </p>
                    <p className="text-sm text-muted mb-4">{cs.subline}</p>

                    {/* Platform tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cs.platforms.map((p) => (
                        <span
                          key={p}
                          className="px-2.5 py-1 text-[11px] font-medium bg-surface border border-border rounded-md text-muted"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all duration-300">
                      Read Case Study
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
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
                  Your Results Are Next
                </p>
                <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                  Ready to become the next
                  <br className="hidden md:block" /> case study?
                </h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                  Every case study started with a 30-minute strategy call. Let&apos;s
                  talk about what&apos;s possible for your business.
                </p>
                <Link
                  href="/contact"
                  className="btn-shine group inline-flex items-center gap-2 bg-white text-foreground font-bold px-12 py-5 rounded-xl hover:bg-zinc-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base animate-glow"
                >
                  Book Your Free Strategy Call
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

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Performance Marketing Services — Meta Ads, PPC, SEO, Consulting",
  description:
    "Expert Meta Ads management, Google PPC campaigns, SEO optimization, and fractional CMO services for US businesses. Hands-on performance marketing from a Top Rated Upwork consultant. No junior handoffs.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Performance Marketing Services | Ureb Arif",
    description:
      "Meta Ads, Google PPC, SEO, and growth consulting for US businesses. Senior-level execution, no agency overhead.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const services = [
  {
    title: "Meta Ads Management",
    subtitle: "Facebook & Instagram Advertising for US Businesses",
    href: "/services/meta-ads",
    features: [
      "Campaign strategy and audience architecture for US markets",
      "Custom and lookalike audience building from your CRM data",
      "Creative direction and high-converting ad copy",
      "Retargeting and full-funnel optimization",
      "Budget management ($5K–$100K+/mo ad spend)",
      "Weekly reporting with actionable ROAS insights",
    ],
    ideal:
      "US businesses spending $5K+/month on Meta who need better ROAS and lower cost per acquisition",
  },
  {
    title: "Google Ads / PPC Management",
    subtitle: "Search, Display, Shopping & YouTube Campaigns",
    href: "/services/google-ads",
    features: [
      "Search and display campaign setup targeting US audiences",
      "Shopping and Performance Max campaigns for ecommerce",
      "Bid strategy and budget optimization for maximum ROI",
      "Negative keyword management to eliminate wasted spend",
      "Landing page optimization for higher conversion rates",
      "Conversion tracking, attribution, and call tracking setup",
    ],
    ideal:
      "Service businesses and ecommerce brands in the US ready to scale paid search profitably",
  },
  {
    title: "SEO & Organic Growth",
    subtitle: "Sustainable US Traffic That Compounds Over Time",
    href: "/services/seo",
    features: [
      "Technical SEO audit and fixes (Core Web Vitals, schema markup)",
      "On-page optimization (titles, metas, heading structure)",
      "Content strategy and US-focused keyword research",
      "Local SEO and Google Business Profile optimization",
      "Link building strategy for domain authority growth",
      "Monthly ranking, traffic, and lead attribution reporting",
    ],
    ideal:
      "US businesses building long-term organic presence alongside paid media for compounding results",
  },
  {
    title: "Growth Consulting",
    subtitle: "Fractional CMO / Growth Lead for US Companies",
    href: "/services/growth-consulting",
    features: [
      "Full marketing strategy review and competitive analysis",
      "Channel mix and budget allocation across paid and organic",
      "Funnel audit and conversion rate optimization (CRO)",
      "CRM setup, lead scoring, and marketing automation",
      "Team hiring, vendor management, and agency oversight",
      "Weekly strategy calls + async Slack/email access",
    ],
    ideal:
      "US companies that need a senior marketing brain without a $200K+/year full-time CMO hire",
  },
];

const faqs = [
  {
    question: "What's the difference between hiring a marketing consultant and an agency?",
    answer:
      "With an agency, your account is typically managed by junior team members following playbooks. With me, you get direct access to 7+ years of senior expertise — I build your strategy and execute it personally. No account managers, no middlemen, no learning curve at your expense.",
  },
  {
    question: "How quickly can I expect to see results from paid ads?",
    answer:
      "Most clients see initial performance data within the first 2 weeks of campaign launch. Meaningful optimization typically happens in weeks 3–6 as we gather enough data for algorithmic learning. Full campaign maturity with optimized ROAS usually takes 60–90 days, depending on industry and budget.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. I work on a month-to-month basis because I believe results should earn your continued business, not a contract. Most clients stay for 6+ months because the ROI speaks for itself. Every engagement starts with a free 30-minute strategy call — no commitment required.",
  },
];

const serviceSchemas = services.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.title,
  description: s.ideal,
  provider: {
    "@type": "Person",
    name: "Ureb Arif",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
}));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Services() {
  return (
    <>
      {serviceSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <JsonLd data={faqSchema} />

      <section className="py-20 md:py-28" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </p>
            <h1
              id="services-heading"
              className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
            >
              Performance marketing services for US businesses
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              No templated playbooks. Every engagement starts with understanding
              your business, your numbers, and your growth goals. Then I build a
              system that delivers measurable ROI — whether you&apos;re in
              Houston, Miami, Los Angeles, or anywhere in the United States.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="block border border-border rounded-2xl overflow-hidden hover:border-accent transition-colors group"
              >
                <div className="grid md:grid-cols-3">
                  <div className="bg-surface p-8 md:p-10 flex flex-col justify-center">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                      0{i + 1}
                    </span>
                    <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold mb-1 group-hover:text-accent transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-sm text-muted">{s.subtitle}</p>
                  </div>

                  <div className="md:col-span-2 p-8 md:p-10">
                    <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <svg
                            className="w-4 h-4 text-accent mt-0.5 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted border-t border-border pt-4">
                      <span className="font-semibold text-foreground">
                        Ideal for:
                      </span>{" "}
                      {s.ideal}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-surface border-y border-border py-20"
        aria-labelledby="how-heading"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              id="how-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold tracking-tight mb-4"
            >
              How I work with US businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "01",
                title: "Hands-On",
                desc: "I do the work myself. No junior handoffs, no outsourcing. Your campaigns are managed by a 7-year veteran, not an intern.",
              },
              {
                icon: "02",
                title: "Transparent",
                desc: "Weekly reports with real numbers. You see exactly what I see — ROAS, CPL, conversion rates, spend — when I see it.",
              },
              {
                icon: "03",
                title: "Results-First",
                desc: "If something isn't working, I pivot fast. No ego, no long-term lock-in. Month-to-month because results earn your business.",
              },
            ].map((w) => (
              <div key={w.title}>
                <span className="inline-block font-[family-name:var(--font-jakarta)] text-4xl font-extrabold text-accent mb-3">
                  {w.icon}
                </span>
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-2">
                  {w.title}
                </h3>
                <p className="text-muted text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-white"
        aria-labelledby="services-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2
              id="services-faq-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold tracking-tight"
            >
              Questions about my services
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-surface border border-border rounded-xl p-6 md:p-8"
              >
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-cta py-20" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-white tracking-tight mb-4">
            Not sure which service fits your business?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Book a free 30-minute strategy call. I&apos;ll audit your current
            setup and tell you exactly where the revenue opportunity is — no
            obligation, no pitch.
          </p>
          <Link
            href="/contact"
            className="btn-shine inline-flex items-center gap-2 bg-white text-foreground font-bold px-10 py-4 rounded-xl hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}

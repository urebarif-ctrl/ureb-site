import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Industries — Automotive, Rehab Centers, Exterior Cleaning, Lead Generation",
  description:
    "Specialized lead generation and paid media for US automotive dealers, rehab and recovery centers, exterior cleaning companies, and B2B/B2C businesses. Industry-specific Meta Ads and Google PPC strategies that deliver measurable ROI.",
  alternates: {
    canonical: `${SITE_URL}/industries`,
  },
  openGraph: {
    title: "Industry Expertise | Ureb Arif",
    description:
      "Specialized marketing for automotive, rehab, exterior cleaning, and lead generation. Deep US market expertise.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const industries = [
  {
    id: "automotive",
    title: "Automotive Dealer Marketing",
    tagline:
      "Fill showrooms. Book service appointments. Move inventory faster across US markets.",
    challenge:
      "US automotive dealers compete on razor-thin margins. Every lead matters, and most agencies waste budget on vanity clicks that never convert to showroom visits, test drives, or service appointments. Dealers in Houston, Dallas, Miami, Los Angeles, and nationwide need campaigns built for car buyers, not general audiences.",
    approach: [
      "Geo-targeted Meta and Google campaigns focused on in-market US car buyers",
      "Vehicle inventory ads (VIA) synced with your lot and real-time pricing",
      "Service department campaigns (oil changes, recalls, seasonal maintenance)",
      "Call tracking and CRM integration for true cost-per-sale reporting",
      "Retargeting campaigns for shoppers who browsed but didn't convert",
    ],
    results: [
      { metric: "67%", label: "reduction in cost-per-lead" },
      { metric: "3.8x", label: "ROAS on inventory campaigns" },
      { metric: "40%", label: "increase in service bookings" },
    ],
  },
  {
    id: "rehab",
    title: "Rehab & Recovery Center Marketing",
    tagline:
      "Connect people across the United States with the treatment they need.",
    challenge:
      "Healthcare marketing in the US is heavily regulated. One wrong targeting choice or ad copy mistake can get your Meta or Google account banned. Treatment centers in Houston, Florida, California, and nationwide need someone who understands HIPAA, LegitScript certification, and sensitive content policies while still delivering qualified admissions.",
    approach: [
      "HIPAA-aware campaign structure and compliant data handling",
      "Meta and Google sensitive content policy compliance",
      "Keyword strategy targeting treatment-seeking intent in US markets",
      "Landing pages optimized for phone calls and insurance verification forms",
      "Insurance verification funnels to qualify leads before clinical handoff",
    ],
    results: [
      { metric: "4.2x", label: "ROAS on PPC campaigns" },
      { metric: "55%", label: "increase in admissions from digital" },
      { metric: "$0", label: "in compliance violations" },
    ],
  },
  {
    id: "exterior",
    title: "Exterior Cleaning Service Marketing",
    tagline:
      "Keep your crews booked solid across your US service area, week after week.",
    challenge:
      "Pressure washing, roof cleaning, and window cleaning are hyperlocal US businesses. You need leads from homeowners within your service radius who are ready to book now — not tire-kickers from 50 miles away. Whether you serve neighborhoods in Florida, Texas, the Carolinas, or the Northeast, your marketing needs to be as local as your service area.",
    approach: [
      "Hyper-local Meta campaigns targeting US homeowners by zip code and neighborhood",
      "Google Local Service Ads setup, optimization, and review management",
      "Before/after creative strategy that stops the scroll and drives bookings",
      "Seasonal campaign calendars (spring cleaning, holiday prep, storm damage)",
      "Google Business Profile optimization for Google Maps pack ranking",
    ],
    results: [
      { metric: "3x", label: "increase in qualified leads" },
      { metric: "$18", label: "average cost per lead" },
      { metric: "85%", label: "crew utilization rate achieved" },
    ],
  },
  {
    id: "leadgen",
    title: "Lead Generation for US Businesses",
    tagline: "Qualified leads on demand. Any industry, any US market.",
    challenge:
      "Most US businesses know they need more leads but don't know which channels to invest in, how much to spend, or how to measure whether their marketing is actually working. They're stuck guessing instead of growing — and every month of guessing is revenue left on the table.",
    approach: [
      "Full-funnel audit: where are you losing potential US customers?",
      "Channel strategy: Meta Ads vs. Google PPC vs. SEO vs. all three",
      "Landing page design and conversion rate optimization (CRO)",
      "CRM setup and lead scoring to prioritize hot prospects",
      "Automated follow-up sequences to convert leads into paying customers",
    ],
    results: [
      { metric: "100+", label: "US brands served across verticals" },
      { metric: "2–4x", label: "average ROAS improvement" },
      { metric: "45%", label: "average lead volume increase" },
    ],
  },
];

const faqs = [
  {
    question:
      "How do you handle HIPAA compliance for rehab center marketing?",
    answer:
      "I build campaign structures that never pass protected health information (PHI) through ad platforms. This includes using server-side tracking, excluding sensitive audience segments, and building HIPAA-compliant landing pages with secure form submissions. I also ensure all ad copy meets Google's and Meta's healthcare advertising policies.",
  },
  {
    question:
      "What makes automotive marketing different from general lead generation?",
    answer:
      "Automotive marketing requires real-time inventory integration, geo-fencing around competitor dealerships, and campaigns segmented by intent (new vs. used, sales vs. service). I build vehicle inventory ads (VIA) that automatically sync with your lot, so you're only advertising cars you actually have in stock.",
  },
  {
    question:
      "Can you help an exterior cleaning business that only serves a small local area?",
    answer:
      "Absolutely — hyper-local is my specialty for this vertical. I target by zip code, neighborhood, and even income demographics to reach homeowners most likely to book. Google Local Service Ads and Google Business Profile optimization are especially effective for small service areas.",
  },
];

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

export default function Industries() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="py-20 md:py-28" aria-labelledby="industries-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Industries
            </p>
            <h1
              id="industries-heading"
              className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
            >
              Deep expertise in US industries where every lead counts
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              I don&apos;t dabble. These are industries where I&apos;ve spent
              real ad budgets, built real campaigns, and delivered measurable
              results for businesses across the United States. The difference
              shows in your ROAS.
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((ind) => (
              <article
                key={ind.id}
                id={ind.id}
                className="border border-border rounded-2xl overflow-hidden scroll-mt-20"
              >
                <div className="bg-foreground text-white p-8 md:p-12">
                  <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold mb-2">
                    {ind.title}
                  </h2>
                  <p className="text-gray-400 text-lg">{ind.tagline}</p>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-sm uppercase tracking-wider text-accent mb-3">
                        The Challenge
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-8">
                        {ind.challenge}
                      </p>

                      <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-sm uppercase tracking-wider text-accent mb-3">
                        My Approach
                      </h3>
                      <ul className="space-y-2.5">
                        {ind.approach.map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-2 text-sm"
                          >
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
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-sm uppercase tracking-wider text-accent mb-6">
                        Results
                      </h3>
                      <div className="space-y-6">
                        {ind.results.map((r) => (
                          <div key={r.label}>
                            <p className="font-[family-name:var(--font-jakarta)] text-4xl font-extrabold text-foreground">
                              {r.metric}
                            </p>
                            <p className="text-sm text-muted">{r.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-surface border-y border-border py-20"
        aria-labelledby="industry-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2
              id="industry-faq-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold tracking-tight"
            >
              Industry-specific questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white border border-border rounded-xl p-6 md:p-8"
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
            Different industry? Let&apos;s talk.
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            My core performance marketing skills transfer across verticals. If
            you have a US business that needs qualified leads, I can help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white font-bold px-10 py-4 rounded-lg hover:bg-accent-hover transition-colors"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}

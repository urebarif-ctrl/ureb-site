import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Meta Ads Management — Facebook & Instagram Advertising",
  description:
    "Expert Meta Ads management for US businesses. Full-funnel Facebook and Instagram ad campaigns with audience architecture, creative direction, and weekly ROAS reporting. $5K–$100K+/mo budgets managed.",
  alternates: { canonical: `${SITE_URL}/services/meta-ads` },
  openGraph: {
    title: "Meta Ads Management | Ureb Arif",
    description:
      "Senior-level Facebook & Instagram ad management. Custom audiences, creative direction, ROAS optimization.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Ads Management",
  description:
    "Full-funnel Facebook and Instagram advertising for US businesses. Audience architecture, creative direction, retargeting, and ROAS optimization.",
  provider: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Meta Ads Management",
};

const features = [
  {
    title: "Campaign Strategy & Audience Architecture",
    desc: "I build your campaign structure around your business goals — not Meta's default suggestions. Custom audiences from your CRM data, lookalikes, interest stacks, and geo-targeting for US markets.",
  },
  {
    title: "Creative Direction & Ad Copy",
    desc: "High-converting ad creative that stops the scroll. I direct the messaging strategy, write the copy, and test variations systematically to find what resonates with your audience.",
  },
  {
    title: "Full-Funnel Retargeting",
    desc: "Most businesses lose money because they only run top-of-funnel ads. I build retargeting sequences for website visitors, video viewers, and abandoned carts that convert warm audiences into customers.",
  },
  {
    title: "Budget Management & Scaling",
    desc: "Whether you're spending $5K or $100K+ per month, I manage budget allocation across campaigns to maximize ROAS. Scaling profitable campaigns while killing underperformers — no wasted spend.",
  },
  {
    title: "Tracking & Attribution",
    desc: "Pixel setup, Conversions API (CAPI), and UTM strategy to ensure every conversion is tracked accurately. You'll know exactly which ads drive revenue, not just clicks.",
  },
  {
    title: "Weekly Reporting & Optimization",
    desc: "Transparent weekly reports with ROAS, CPL, CPA, and conversion data. No vanity metrics. I show you what I see, and I optimize daily — not once a month.",
  },
];

const faqs = [
  {
    question: "How much should I spend on Meta Ads?",
    answer:
      "I typically work with businesses spending $5,000+/month on Meta Ads. This allows enough budget for proper testing, audience building, and optimization. Below that threshold, it's difficult to gather statistically significant data for optimization decisions.",
  },
  {
    question: "How long until I see results from Facebook Ads?",
    answer:
      "Initial performance data comes within the first 2 weeks. Meaningful optimization happens in weeks 3–6 as we gather enough data for Meta's algorithm to learn. Full campaign maturity with optimized ROAS typically takes 60–90 days.",
  },
  {
    question: "Do you handle the creative and copy too?",
    answer:
      "I direct the creative strategy and write all ad copy. For visual assets, I provide detailed creative briefs and can work with your design team or recommend production partners. The messaging and positioning is always mine.",
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

export default function MetaAds() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />

      <section className="py-20 md:py-28" aria-labelledby="meta-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <Link
              href="/services"
              className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1 mb-6"
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
              All Services
            </Link>
            <h1
              id="meta-heading"
              className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
            >
              Meta Ads Management
            </h1>
            <p className="text-accent font-semibold text-lg mb-4">
              Facebook & Instagram Advertising for US Businesses
            </p>
            <p className="text-muted text-lg leading-relaxed">
              I build and manage full-funnel Meta Ads campaigns that turn ad
              spend into measurable revenue. No junior handoffs, no templated
              playbooks — senior-level strategy and daily optimization from
              someone who&apos;s managed over $2M in ad spend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100} variant="blur">
              <div className="border border-border rounded-xl p-7 hover:border-accent-muted transition-colors card-hover">
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold mb-3">
              Ideal for
            </h2>
            <p className="text-muted leading-relaxed">
              US businesses spending $5K+/month on Meta who need better ROAS and
              lower cost per acquisition. Ecommerce brands, lead generation
              businesses, healthcare providers, and service companies looking
              for senior-level campaign management without the agency overhead.
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-cta py-20" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal variant="blur">
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-white tracking-tight mb-4">
            Ready to scale your Meta Ads?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Book a free strategy call. I&apos;ll audit your current Meta setup
            and show you exactly where the opportunity is.
          </p>
          <Link
            href="/contact"
            className="btn-shine inline-flex items-center gap-2 bg-white text-foreground font-bold px-10 py-4 rounded-xl hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg animate-glow"
          >
            Book a Free Strategy Call
          </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

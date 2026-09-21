import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Google Ads & PPC Management — Search, Shopping, Display",
  description:
    "Expert Google Ads management for US businesses. Search, Shopping, Display, and Performance Max campaigns with bid strategy optimization, conversion tracking, and landing page CRO.",
  alternates: { canonical: `${SITE_URL}/services/google-ads` },
  openGraph: {
    title: "Google Ads & PPC Management | Ureb Arif",
    description:
      "Search, Shopping, Display & Performance Max campaigns. Conversion tracking, bid optimization, and real ROI reporting.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads & PPC Management",
  description:
    "Search, Shopping, Display, and Performance Max campaign management for US businesses with conversion tracking and ROAS optimization.",
  provider: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Google Ads PPC Management",
};

const features = [
  {
    title: "Search Campaign Management",
    desc: "Keyword research, ad group architecture, and bid strategy designed to capture high-intent US searchers. I build campaigns around buying intent, not just search volume.",
  },
  {
    title: "Shopping & Performance Max",
    desc: "Product feed optimization, campaign segmentation, and Performance Max strategies for ecommerce brands. I structure campaigns to control which products get budget and which audiences see them.",
  },
  {
    title: "Bid Strategy & Budget Optimization",
    desc: "Smart bidding strategies (tCPA, tROAS, Maximize Conversions) tuned to your actual business metrics. I manage daily bids to maximize ROI, not just clicks.",
  },
  {
    title: "Negative Keyword Management",
    desc: "Aggressive negative keyword lists to eliminate wasted spend. I review search terms daily during the first month and weekly after that to keep your budget focused on qualified traffic.",
  },
  {
    title: "Landing Page Optimization",
    desc: "Your ads are only as good as your landing pages. I audit and optimize landing pages for conversion rate, page speed, and message match — directly impacting your Quality Score and CPA.",
  },
  {
    title: "Conversion Tracking & Attribution",
    desc: "Proper Google Ads conversion tracking, Google Analytics 4 setup, and call tracking configuration. You'll know exactly which keywords and ads drive revenue, not just form fills.",
  },
];

const faqs = [
  {
    question: "How much should I spend on Google Ads?",
    answer:
      "Minimum recommended budgets vary by industry and competition. For most US businesses, I recommend starting at $3,000–$5,000/month in ad spend to generate enough data for optimization. High-competition verticals like legal, rehab, or insurance may need $10K+ for meaningful results.",
  },
  {
    question: "Google Ads vs. Meta Ads — which should I use?",
    answer:
      "Google Ads captures demand (people actively searching). Meta Ads creates demand (targeting people by demographics and behavior). Most businesses benefit from both. I typically recommend starting with the channel that matches your sales cycle — Google for immediate-need services, Meta for awareness and consideration.",
  },
  {
    question: "How do you measure Google Ads success?",
    answer:
      "ROAS (Return on Ad Spend), cost per lead, cost per acquisition, and conversion rate are the primary metrics. I set up proper attribution so you can see which campaigns drive actual revenue — not just clicks or impressions. Weekly reports include all key metrics with trend analysis.",
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

export default function GoogleAds() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />

      <section className="py-20 md:py-28" aria-labelledby="ppc-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <Link
              href="/services"
              className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1 mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All Services
            </Link>
            <h1
              id="ppc-heading"
              className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
            >
              Google Ads & PPC Management
            </h1>
            <p className="text-accent font-semibold text-lg mb-4">
              Search, Display, Shopping & YouTube Campaigns
            </p>
            <p className="text-muted text-lg leading-relaxed">
              I manage Google Ads campaigns that capture high-intent US buyers at
              the moment they&apos;re searching for what you sell. From keyword
              strategy to landing page optimization to conversion tracking — every
              piece of the PPC puzzle, handled by a senior specialist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100} variant="blur">
              <div className="border border-border rounded-xl p-7 hover:border-accent-muted transition-colors card-hover">
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold mb-3">Ideal for</h2>
            <p className="text-muted leading-relaxed">
              Service businesses and ecommerce brands in the US ready to scale
              paid search profitably. Companies that need someone who understands
              bidding strategy, keyword intent, and conversion tracking — not
              just campaign setup.
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-border rounded-xl p-6">
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
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
            Want better results from Google Ads?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Book a free strategy call. I&apos;ll review your campaigns and show
            you where you&apos;re leaving money on the table.
          </p>
          <Link href="/contact" className="btn-shine inline-flex items-center gap-2 bg-white text-foreground font-bold px-10 py-4 rounded-xl hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg animate-glow">
            Book a Free Strategy Call
          </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

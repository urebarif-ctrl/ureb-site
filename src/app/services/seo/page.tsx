import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO & Organic Growth — Technical SEO, Content Strategy, Local SEO",
  description:
    "SEO services for US businesses. Technical audits, on-page optimization, content strategy, local SEO, and link building. Sustainable organic traffic that compounds alongside paid media.",
  alternates: { canonical: `${SITE_URL}/services/seo` },
  openGraph: {
    title: "SEO & Organic Growth | Ureb Arif",
    description:
      "Technical SEO, content strategy, and local optimization. Building sustainable organic traffic for US businesses.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO & Organic Growth",
  description:
    "Technical SEO audits, on-page optimization, content strategy, and local SEO for US businesses seeking sustainable organic traffic growth.",
  provider: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "SEO Services",
};

const features = [
  {
    title: "Technical SEO Audit & Fixes",
    desc: "Core Web Vitals optimization, crawlability fixes, schema markup implementation, site speed improvements, and mobile optimization. I fix the technical foundation before building on top of it.",
  },
  {
    title: "On-Page Optimization",
    desc: "Title tags, meta descriptions, heading structure, internal linking, and content optimization for target keywords. Every page is optimized for both search engines and human readers.",
  },
  {
    title: "Content Strategy & Keyword Research",
    desc: "US-focused keyword research to find the terms your customers actually search for. I build content calendars around search intent and business goals, not just volume.",
  },
  {
    title: "Local SEO & Google Business Profile",
    desc: "Google Business Profile optimization, local citation building, review management strategy, and Google Maps pack targeting for businesses serving specific US markets.",
  },
  {
    title: "Link Building Strategy",
    desc: "Ethical, sustainable link building through content-driven outreach, industry partnerships, and digital PR. Building domain authority that compounds over time.",
  },
  {
    title: "Monthly Reporting & Attribution",
    desc: "Ranking tracking, organic traffic analysis, and lead attribution reporting. You'll see which pages and keywords drive actual business results — not just impressions.",
  },
];

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "Technical fixes can show impact within weeks. Content and link building typically take 3–6 months to produce meaningful ranking improvements. SEO is a compounding investment — the longer you invest, the stronger the returns. I provide monthly reports so you can track progress from day one.",
  },
  {
    question: "Should I do SEO and paid ads at the same time?",
    answer:
      "Yes — they complement each other. Paid ads deliver immediate traffic while SEO builds long-term organic presence. Data from paid campaigns also informs SEO strategy (which keywords convert, which landing pages work). Most of my clients run both channels.",
  },
  {
    question: "Do you do content writing too?",
    answer:
      "I build the content strategy, keyword map, and content briefs. For the actual writing, I can work with your content team or recommend trusted writers who specialize in your industry. The strategic direction is always mine.",
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

export default function SEO() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />

      <section className="py-20 md:py-28" aria-labelledby="seo-heading">
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
              id="seo-heading"
              className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
            >
              SEO & Organic Growth
            </h1>
            <p className="text-accent font-semibold text-lg mb-4">
              Sustainable US Traffic That Compounds Over Time
            </p>
            <p className="text-muted text-lg leading-relaxed">
              I build organic search strategies that deliver compounding returns.
              Technical SEO, content strategy, and local optimization — designed
              to work alongside your paid campaigns, not replace them.
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

          <ScrollReveal variant="blur">
          <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold mb-3">Ideal for</h2>
            <p className="text-muted leading-relaxed">
              US businesses building long-term organic presence alongside paid
              media for compounding results. Companies tired of renting traffic
              and ready to own their search visibility.
            </p>
          </div>
          </ScrollReveal>

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
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-white tracking-tight mb-4">
            Ready to invest in organic growth?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Book a free strategy call. I&apos;ll audit your current SEO and show
            you the quick wins and long-term opportunities.
          </p>
          <Link href="/contact" className="btn-shine inline-flex items-center gap-2 bg-white text-foreground font-bold px-10 py-4 rounded-xl hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg animate-glow">
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}

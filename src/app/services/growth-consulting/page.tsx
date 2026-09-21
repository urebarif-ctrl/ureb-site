import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Growth Consulting — Fractional CMO & Marketing Strategy",
  description:
    "Fractional CMO and growth consulting for US companies. Full marketing strategy, channel mix, funnel optimization, CRM setup, and team oversight. Senior marketing leadership without the $200K+ salary.",
  alternates: { canonical: `${SITE_URL}/services/growth-consulting` },
  openGraph: {
    title: "Growth Consulting — Fractional CMO | Ureb Arif",
    description:
      "Senior marketing leadership on demand. Strategy, execution, and team oversight without the full-time CMO salary.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Growth Consulting",
  description:
    "Fractional CMO and growth consulting services for US companies seeking senior marketing leadership without a full-time hire.",
  provider: { "@type": "Person", name: "Ureb Arif", url: SITE_URL },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Growth Marketing Consulting",
};

const features = [
  {
    title: "Marketing Strategy & Competitive Analysis",
    desc: "Full audit of your marketing stack, competitive landscape, and growth opportunities. I build a data-driven strategy aligned with your revenue goals and budget constraints.",
  },
  {
    title: "Channel Mix & Budget Allocation",
    desc: "Which channels deserve your budget? I analyze your customer journey to determine the right mix of paid media, organic, email, and content — then allocate budget for maximum impact.",
  },
  {
    title: "Funnel Audit & CRO",
    desc: "Where are you losing prospects? I audit your entire funnel — from first touch to closed deal — and implement conversion rate improvements at every stage.",
  },
  {
    title: "CRM & Marketing Automation",
    desc: "CRM setup, lead scoring, email automation, and follow-up sequences. I build the systems that turn leads into customers on autopilot.",
  },
  {
    title: "Team & Vendor Management",
    desc: "Hiring marketers? Evaluating agencies? I help you build and manage your marketing team or vendor roster, providing the oversight that ensures quality execution.",
  },
  {
    title: "Weekly Strategy & Async Access",
    desc: "Weekly strategy calls plus async Slack and email access. I'm embedded in your business without being on your payroll. You get CMO-level thinking on a fractional budget.",
  },
];

const faqs = [
  {
    question: "What's the difference between a fractional CMO and an agency?",
    answer:
      "An agency executes tactics. A fractional CMO owns your marketing strategy. I sit at the leadership level — making decisions about channel mix, budget allocation, team hiring, and vendor management. I can also execute campaigns directly or oversee the teams that do.",
  },
  {
    question: "How many hours per week is a fractional CMO engagement?",
    answer:
      "Most engagements are 10–20 hours per week, depending on scope. This includes a weekly strategy call, async communication, campaign oversight, and strategic work. The exact structure is customized to your business needs.",
  },
  {
    question: "When does a company need a fractional CMO?",
    answer:
      "When you've outgrown random marketing tactics but aren't ready for a $200K+ full-time CMO hire. Typically companies at $1M–$20M revenue that need strategic marketing leadership to break through their current growth ceiling.",
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

export default function GrowthConsulting() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />

      <section className="py-20 md:py-28" aria-labelledby="consulting-heading">
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
              id="consulting-heading"
              className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
            >
              Growth Consulting
            </h1>
            <p className="text-accent font-semibold text-lg mb-4">
              Fractional CMO / Growth Lead for US Companies
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Senior marketing leadership without the full-time salary. I embed
              in your business as a fractional CMO — owning strategy, overseeing
              execution, and driving measurable growth across all channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {features.map((f) => (
              <div key={f.title} className="border border-border rounded-xl p-7 hover:border-accent-muted transition-colors">
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold mb-3">Ideal for</h2>
            <p className="text-muted leading-relaxed">
              US companies at $1M–$20M revenue that need a senior marketing brain
              without a $200K+/year full-time CMO hire. Businesses that have
              outgrown random tactics and need strategic leadership to unlock
              their next growth phase.
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
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-white tracking-tight mb-4">
            Need marketing leadership?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Book a free call. Let&apos;s talk about where your marketing is today
            and what strategic leadership could unlock.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white font-bold px-10 py-4 rounded-xl hover:bg-accent-hover transition-all duration-200">
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}

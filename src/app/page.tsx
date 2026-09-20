import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/constants";

const stats = [
  { value: "100+", label: "Brands Served" },
  { value: "7+", label: "Years Experience" },
  { value: "4", label: "Industry Verticals" },
  { value: "Top Rated", label: "Upwork Status" },
];

const industries = [
  {
    title: "Automotive",
    description:
      "Dealer leads, inventory ads, service appointment bookings across the US. Precision targeting that fills showrooms in Houston, Dallas, Miami, and nationwide.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M16 17h.01M3 11l1.5-5.25A2 2 0 016.4 4h11.2a2 2 0 011.9 1.75L21 11M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6M3 11h18" />
      </svg>
    ),
  },
  {
    title: "Rehab & Recovery",
    description:
      "HIPAA-compliant campaigns that connect people in need with treatment centers across the United States. Sensitive, regulated, effective.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Exterior Cleaning",
    description:
      "Pressure washing, roof cleaning, window washing. Hyper-local lead generation for service companies across the US that keeps crews booked solid.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Lead Generation",
    description:
      "For any US business that needs qualified leads on demand. Meta Ads, Google PPC, landing pages, funnels, and CRM integration.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
];

const results = [
  { metric: "4.2x", label: "ROAS", context: "Rehab center PPC campaign in Houston, TX" },
  { metric: "67%", label: "Lower CPL", context: "Automotive lead generation across US dealers" },
  { metric: "3x", label: "Lead Volume", context: "Exterior cleaning company in Florida" },
];

const faqs = [
  {
    question: "What does a growth marketing consultant do?",
    answer:
      "A growth marketing consultant builds and manages revenue-driving campaigns across paid media (Meta Ads, Google Ads), SEO, and conversion optimization. Unlike an agency, you get senior-level strategy and execution from one expert — no junior handoffs. I focus on measurable outcomes like ROAS, cost-per-lead, and lead volume for US businesses.",
  },
  {
    question: "How much does it cost to hire a performance marketing consultant?",
    answer:
      "Engagement pricing depends on scope, ad spend, and channels. Most clients invest $3,000–$10,000/month in management fees, plus their ad budget (typically $5,000–$100,000+/month). Every engagement starts with a free 30-minute strategy call where I review your current setup and identify specific opportunities before any commitment.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "I specialize in four high-ROI verticals: automotive dealership leads, rehab and recovery center admissions, exterior cleaning services (pressure washing, roof cleaning), and general B2B/B2C lead generation. I've managed over $2M in ad spend across these verticals for 100+ US-based brands.",
  },
  {
    question: "Do you work with businesses outside the United States?",
    answer:
      "While my primary focus and expertise is serving businesses targeting US consumers, I work with companies globally on their US market entry and growth strategies. My campaigns are optimized for American audiences, compliance requirements, and buying behaviors.",
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ureb Arif — Growth & Performance Marketing Consultant",
  description:
    "Independent growth marketing consultant specializing in Meta Ads, Google PPC, SEO, and lead generation for US businesses.",
  url: SITE_URL,
  publisher: {
    "@type": "Person",
    name: "Ureb Arif",
  },
  specialty: "Performance Marketing & Lead Generation",
  about: {
    "@type": "Thing",
    name: "Performance Marketing Services for US Businesses",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ureb Arif — Growth Marketing",
  description:
    "Performance marketing and lead generation services for US businesses. Meta Ads, Google PPC, SEO, and growth consulting.",
  url: SITE_URL,
  provider: {
    "@type": "Person",
    name: "Ureb Arif",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Meta Ads Management",
    "Google Ads PPC",
    "SEO",
    "Lead Generation",
    "Growth Consulting",
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden" aria-label="Hero">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Independent Growth Consultant — Serving US Businesses
              </p>
              <h1 className="font-[family-name:var(--font-jakarta)] text-4xl md:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight mb-6">
                I Don&apos;t Run Campaigns.
                <br />
                <span className="text-accent">I Build Revenue Engines.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
                Meta Ads. Google PPC. SEO. From 100+ brands to a select few.
                Senior hands-on performance marketing expertise for US businesses
                that can&apos;t afford to guess with their ad spend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-accent text-white font-semibold px-8 py-4 rounded-lg text-center hover:bg-accent-hover transition-colors"
                >
                  Book a Free Strategy Call
                </Link>
                <Link
                  href="/industries"
                  className="border-2 border-foreground text-foreground font-semibold px-8 py-4 rounded-lg text-center hover:bg-foreground hover:text-white transition-colors"
                >
                  See My Work
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-accent/20 shadow-2xl">
                  <Image
                    src="/ureb-headshot.jpg"
                    alt="Ureb Arif — Growth and Performance Marketing Consultant specializing in Meta Ads, Google PPC, and lead generation for US businesses"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-foreground text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  Upwork Top Rated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface" aria-label="Key statistics">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold text-foreground">
                  {s.value}
                </p>
                <p className="text-sm text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="industries-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Industry Expertise
            </p>
            <h2
              id="industries-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            >
              Built for industries where every lead counts
            </h2>
            <p className="text-muted text-lg">
              Not a generalist who reads a blog post and calls himself an
              expert. Real ad budgets managed, real results delivered for US
              businesses across four high-ROI verticals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.title}
                href={`/industries#${ind.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="group border border-border rounded-xl p-8 hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="text-accent mb-4">{ind.icon}</div>
                <h3 className="font-[family-name:var(--font-jakarta)] text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {ind.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {ind.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-white py-20 md:py-28" aria-labelledby="results-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Proven Results
            </p>
            <h2
              id="results-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            >
              Numbers, not promises
            </h2>
            <p className="text-gray-400 text-lg">
              Every engagement starts with measurable goals and ends with
              documented results. Here&apos;s what US businesses have achieved
              working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((r) => (
              <div key={r.label} className="border border-gray-800 rounded-xl p-8">
                <p className="font-[family-name:var(--font-jakarta)] text-5xl font-extrabold text-accent mb-2">
                  {r.metric}
                </p>
                <p className="font-semibold text-lg mb-1">{r.label}</p>
                <p className="text-gray-500 text-sm">{r.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2
              id="process-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight"
            >
              Simple process, serious results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Free Strategy Call",
                desc: "30-minute call to understand your business, goals, and current marketing setup. No pitch, just listening. Available for US businesses in any time zone.",
              },
              {
                step: "02",
                title: "Custom Audit & Plan",
                desc: "I audit your current campaigns, landing pages, and funnel. You get a detailed report with specific revenue opportunities and a clear action plan.",
              },
              {
                step: "03",
                title: "Launch & Scale",
                desc: "We agree on a plan, I execute. Weekly reporting with real numbers, monthly deep dives, and real-time Slack access. No long-term contracts required.",
              },
            ].map((s) => (
              <div key={s.step} className="relative pl-16">
                <span className="absolute left-0 top-0 font-[family-name:var(--font-jakarta)] text-5xl font-extrabold text-accent/20">
                  {s.step}
                </span>
                <h3 className="font-[family-name:var(--font-jakarta)] text-lg font-bold mb-2">
                  {s.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-20" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Frequently Asked Questions
            </p>
            <h2
              id="faq-heading"
              className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight"
            >
              Common questions about working with me
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

      <section className="bg-foreground py-20" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ready to stop guessing and start growing?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Limited spots available. I work with a select number of US
            businesses to ensure hands-on attention and measurable ROI.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white font-bold px-10 py-4 rounded-lg hover:bg-accent-hover transition-colors"
          >
            Book Your Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}

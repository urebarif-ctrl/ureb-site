import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountUp } from "@/components/count-up";
import { SITE_URL, UPWORK_URL, LINKEDIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hire Ureb Arif on Upwork — PPC & Growth Marketing Consultant",
  description:
    "Hire Ureb Arif through Upwork for contract protection and secure payments. Top Rated consultant with 100+ projects, $2M+ ad spend managed. Meta Ads, Google PPC, SEO.",
  alternates: { canonical: `${SITE_URL}/hire` },
  openGraph: {
    title: "Hire Ureb Arif on Upwork",
    description:
      "Top Rated digital marketing consultant available on Upwork. Meta Ads, Google PPC, SEO. 100+ projects delivered.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const services = [
  {
    title: "Meta Ads Management",
    desc: "Full-funnel Facebook and Instagram advertising. Campaign strategy, creative direction, audience targeting, and ongoing optimization.",
  },
  {
    title: "Google Ads & PPC",
    desc: "Search, Shopping, Display, and YouTube campaigns. Keyword strategy, bid management, and conversion tracking setup.",
  },
  {
    title: "SEO & Organic Growth",
    desc: "Technical SEO audits, on-page optimization, content strategy, and link building to drive sustainable organic traffic.",
  },
  {
    title: "Growth Strategy & Consulting",
    desc: "Marketing audits, channel strategy, budget allocation, and growth roadmaps for businesses ready to scale.",
  },
  {
    title: "Analytics & Tracking",
    desc: "GA4 setup, GTM implementation, conversion tracking, attribution modeling, and custom reporting dashboards.",
  },
  {
    title: "Marketing Automation",
    desc: "Email marketing flows, CRM integration, lead scoring, and automated nurture sequences via Klaviyo, HubSpot, or similar.",
  },
];

const upworkBenefits = [
  {
    title: "Payment Protection",
    desc: "Funds are held securely in escrow. You only pay when milestones are met and work is approved.",
  },
  {
    title: "Milestone Tracking",
    desc: "Break projects into clear milestones with defined deliverables, timelines, and approval checkpoints.",
  },
  {
    title: "Work Verification",
    desc: "Full transparency through time tracking, work diaries, and detailed activity logs for hourly contracts.",
  },
  {
    title: "Dispute Resolution",
    desc: "If anything goes sideways, Upwork provides professional mediation and arbitration to protect both parties.",
  },
];

const faqs = [
  {
    q: "What types of projects can I hire you for on Upwork?",
    a: "Anything within performance marketing: Meta Ads campaigns, Google Ads management, SEO audits, conversion tracking setup, growth strategy consulting, or ongoing retainer-based campaign management.",
  },
  {
    q: "Do you work hourly or fixed-price?",
    a: "Both. For ongoing campaign management I typically work on hourly contracts with weekly reporting. For audits, strategy documents, or one-time setups, fixed-price contracts work well.",
  },
  {
    q: "What is your typical response time?",
    a: "I respond to messages within a few hours during business days. For active campaigns, I monitor performance daily and flag issues proactively.",
  },
  {
    q: "Can we start with a small project first?",
    a: "Absolutely. Many clients start with a marketing audit or a single campaign setup before moving to a broader engagement. It is a good way to evaluate the fit.",
  },
  {
    q: "Do I need to use Upwork, or can we work directly?",
    a: "You can work with me through Upwork or directly. Upwork offers built-in payment protection and project management. For direct engagements, visit the contact page to start a conversation.",
  },
];

export default function HirePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="py-20 md:py-28" aria-labelledby="hire-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">
                Available on Upwork
              </p>
              <h1
                id="hire-heading"
                className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
              >
                Hire Ureb Arif on Upwork
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Work with a senior performance marketing consultant through Upwork&apos;s
                trusted platform. Contract protection, milestone tracking, and secure
                payments &mdash; so you can focus on results.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={UPWORK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine group inline-flex items-center gap-2 bg-foreground text-white font-bold px-8 py-4 rounded-xl hover:bg-foreground-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                >
                  View Upwork Profile
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-foreground text-foreground font-bold px-8 py-4 rounded-xl hover:bg-foreground hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Or Contact Directly
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Credentials ─── */}
      <section className="border-y border-border bg-white py-14" aria-label="Credentials">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground group-hover:text-accent transition-colors">
                  <CountUp end={100} suffix="+" duration={2200} />
                </p>
                <p className="text-xs text-muted mt-2 uppercase tracking-wider font-medium">
                  Projects Delivered
                </p>
              </div>
              <div className="group">
                <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground group-hover:text-accent transition-colors">
                  <CountUp end={2} prefix="$" suffix="M+" duration={1800} />
                </p>
                <p className="text-xs text-muted mt-2 uppercase tracking-wider font-medium">
                  Ad Spend Managed
                </p>
              </div>
              <div className="group">
                <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground group-hover:text-accent transition-colors">
                  <CountUp end={7} suffix="+" duration={1500} />
                </p>
                <p className="text-xs text-muted mt-2 uppercase tracking-wider font-medium">
                  Years Experience
                </p>
              </div>
              <div className="group">
                <p className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold text-accent">
                  Top Rated
                </p>
                <p className="text-xs text-muted mt-2 uppercase tracking-wider font-medium">
                  Upwork Status
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Who You're Hiring ─── */}
      <section className="py-20 md:py-28" aria-labelledby="who-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                Not a Junior Freelancer
              </p>
              <h2
                id="who-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                A consultant who happens to be on Upwork
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
              <p className="text-muted leading-relaxed mb-6">
                When you hire through my Upwork profile, you get the same senior-level
                expertise I bring to direct clients. I am not an entry-level freelancer
                taking on volume work. I am a digital marketing consultant, senior media
                buyer, and agency founder who uses Upwork as one channel for client
                engagement.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Digital marketing consultant",
                  "Senior media buyer",
                  "PPC and growth marketing specialist",
                  "Agency founder (Markit Media)",
                ].map((title) => (
                  <div key={title} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Services Available ─── */}
      <section className="bg-foreground text-white py-20 md:py-28 relative overflow-hidden" aria-labelledby="services-heading">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/[0.04] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-[5%] w-56 h-56 bg-accent/[0.03] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                What I Deliver
              </p>
              <h2
                id="services-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                Services available through Upwork
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 transition-colors duration-300">
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-base mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Upwork ─── */}
      <section className="py-20 md:py-28" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                Built-in Protection
              </p>
              <h2
                id="why-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                Why hire through Upwork?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {upworkBenefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 80}>
                <div className="p-8 rounded-2xl border border-border bg-white card-hover">
                  <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center mb-5">
                    <span className="text-white font-[family-name:var(--font-jakarta)] font-extrabold text-xs">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-base mb-2">
                    {b.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Track Record ─── */}
      <section className="border-y border-border bg-surface py-20 md:py-28" aria-labelledby="track-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                Proven Results
              </p>
              <h2
                id="track-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                What clients can expect
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              {
                title: "Hands-on execution, not delegation",
                desc: "When you hire me, you work directly with me. No junior handoffs, no account managers in between. I build, manage, and optimize your campaigns personally.",
              },
              {
                title: "Transparent reporting from day one",
                desc: "Weekly performance reports with real numbers. You see exactly what is working, what is not, and what I am doing about it. No vanity metrics, no spin.",
              },
              {
                title: "Cross-industry experience",
                desc: "Having worked across healthcare, ecommerce, automotive, SaaS, and local services, I bring battle-tested strategies that are adapted to your specific market and audience.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-white border border-border rounded-2xl p-8 card-hover">
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 md:py-28" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">
                Common Questions
              </p>
              <h2
                id="faq-heading"
                className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                Frequently asked questions
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="border border-border rounded-2xl p-6 bg-white">
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-sm mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 md:py-32" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center bg-surface border border-border rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/[0.04] rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                  Ready to get started?
                </h2>
                <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
                  View my Upwork profile to see reviews, portfolio, and availability. Or reach out directly to discuss your project.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={UPWORK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine group inline-flex items-center gap-2 bg-foreground text-white font-bold px-10 py-4 rounded-xl hover:bg-foreground-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                  >
                    View Upwork Profile
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-foreground text-foreground font-bold px-10 py-4 rounded-xl hover:bg-foreground hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact Directly
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

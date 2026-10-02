import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountUp } from "@/components/count-up";
import { SafeImage } from "@/components/safe-image";
import { SITE_URL } from "@/lib/constants";

const services = [
  {
    title: "Meta Ads Management",
    desc: "Full-funnel Facebook and Instagram campaigns built for US audiences. Audience architecture, creative direction, and weekly ROAS reporting.",
    href: "/services/meta-ads",
    icon: "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m4 4H3m14 0l-.867 12.142A2 2 0 0114.138 22H9.862a2 2 0 01-1.995-1.858L7 8m5 4v6m4-6v6M5 8h14",
    num: "01",
  },
  {
    title: "Google Ads & PPC",
    desc: "Search, Shopping, Display, and Performance Max campaigns. Bid strategy, negative keyword management, and conversion tracking that works.",
    href: "/services/google-ads",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    num: "02",
  },
  {
    title: "SEO & Organic Growth",
    desc: "Technical audits, content strategy, and local SEO. Building sustainable organic traffic that compounds alongside your paid campaigns.",
    href: "/services/seo",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    num: "03",
  },
  {
    title: "Growth Consulting",
    desc: "Fractional CMO for US companies. Full marketing strategy, channel mix, funnel optimization, and team oversight — without the full-time salary.",
    href: "/services/growth-consulting",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
    num: "04",
  },
];

const industries = [
  { name: "Automotive Dealers", icon: "M8 17h.01M16 17h.01M3 11l1.5-5.25A2 2 0 016.4 4h11.2a2 2 0 011.9 1.75L21 11M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6M3 11h18" },
  { name: "Rehab & Recovery", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
  { name: "Exterior Cleaning", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" },
  { name: "Ecommerce & Shopify", icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" },
  { name: "Local Services", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
  { name: "Restaurants & QSR", icon: "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" },
];

const differentiators = [
  { title: "You work with me, not a team of juniors", desc: "No account managers. No junior handoffs. I build your strategy, I execute it, and I optimize it daily. Your campaigns are managed by someone with 7+ years of experience — not an intern following a playbook." },
  { title: "I've sat in your seat", desc: "In-house brand manager. Agency founder. Strategic partner. Independent consultant. I've run campaigns from every side of the table, so I know what actually works versus what just looks good in a deck." },
  { title: "Month-to-month, results earn your business", desc: "No long-term contracts. No setup fees. Every engagement is month-to-month because I believe the work should speak for itself. Most clients stay 6+ months because the ROI is clear." },
];

const process = [
  { step: "01", title: "Free Strategy Call", desc: "30 minutes to understand your business, goals, and what's not working. I'll tell you honestly if I can help — and if not, I'll point you in the right direction.", detail: "We'll cover your current campaigns, target audience, budget, and growth goals." },
  { step: "02", title: "Deep Audit & Custom Plan", desc: "I review your campaigns, landing pages, analytics, and funnel end-to-end. You get a detailed report with specific, prioritized revenue opportunities — even if you don't hire me.", detail: "Includes competitive analysis, channel recommendations, and projected ROI." },
  { step: "03", title: "Execute, Measure, Optimize", desc: "I build and manage your campaigns with daily optimization. Weekly reports with real metrics — ROAS, CPL, conversion rates. Monthly deep dives.", detail: "Transparent reporting. You see exactly what I see, when I see it." },
  { step: "04", title: "Scale What Works", desc: "Once we find winning campaigns, we scale them methodically. Increase budget on winners, kill underperformers, test new channels, and compound your growth month over month.", detail: "Systematic scaling framework — no guessing, no wasted budget." },
];

const comparison = [
  { feature: "Who manages your campaigns", me: "Me — 7+ years experience", agency: "Junior account manager" },
  { feature: "Communication", me: "Direct Slack / email access", agency: "Scheduled monthly calls" },
  { feature: "Contract", me: "Month-to-month", agency: "6-12 month lock-in" },
  { feature: "Reporting", me: "Weekly, transparent metrics", agency: "Monthly PDF summary" },
  { feature: "Strategy", me: "Custom to your business", agency: "Templated playbook" },
  { feature: "Speed", me: "Changes live in hours", agency: "2-week ticket queue" },
];

const faqs = [
  { question: "What does a growth marketing consultant do?", answer: "A growth marketing consultant builds and manages revenue-driving campaigns across paid media (Meta Ads, Google Ads), SEO, and conversion optimization. Unlike an agency, you get senior-level strategy and execution from one expert — no junior handoffs. I focus on measurable outcomes like ROAS, cost-per-lead, and lead volume for US businesses." },
  { question: "How much does it cost to hire a performance marketing consultant?", answer: "Engagement pricing depends on scope, ad spend, and channels. Most clients invest $3,000–$10,000/month in management fees, plus their ad budget. Every engagement starts with a free strategy call where I review your current setup and identify specific opportunities before any commitment." },
  { question: "Which industries do you specialize in?", answer: "I specialize in automotive dealership leads, rehab and recovery center admissions, exterior cleaning services, ecommerce, and general lead generation. I've managed over $2M in ad spend across these verticals for 100+ brands." },
  { question: "Do you work with businesses outside the United States?", answer: "While my primary focus is US businesses, I work with companies globally on their US market entry and growth strategies. I also serve clients in the UK, UAE, and other international markets." },
  { question: "How quickly can I expect results from paid ads?", answer: "Initial performance data comes within 2 weeks. Meaningful optimization happens in weeks 3-6 as algorithms learn. Full campaign maturity with optimized ROAS typically takes 60-90 days, depending on industry, budget, and competition." },
  { question: "Do you require long-term contracts?", answer: "No. Every engagement is month-to-month. I believe results should earn your continued business, not a contract. Most clients stay 6+ months because the ROI speaks for itself." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const webPageSchema = { "@context": "https://schema.org", "@type": "WebPage", name: "Ureb Arif — Growth & Performance Marketing Consultant", description: "Independent growth marketing consultant specializing in Meta Ads, Google PPC, SEO, and lead generation for US businesses.", url: SITE_URL, publisher: { "@type": "Person", name: "Ureb Arif" } };
const serviceSchema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Ureb Arif — Growth Marketing", description: "Performance marketing and lead generation services for US businesses.", url: SITE_URL, provider: { "@type": "Person", name: "Ureb Arif" }, areaServed: { "@type": "Country", name: "United States" }, serviceType: ["Meta Ads Management", "Google Ads PPC", "SEO", "Lead Generation", "Growth Consulting"] };

// Photography-led personal brand refresh — production sync.
export default function Home() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center" aria-label="Hero">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-[10%] right-[8%] w-80 h-80 bg-accent/[0.07] rounded-full blur-3xl animate-float-1" />
          <div className="absolute bottom-[5%] left-[3%] w-[28rem] h-[28rem] bg-accent/[0.04] rounded-full blur-3xl animate-float-2" />
          <div className="absolute top-[50%] left-[40%] w-64 h-64 bg-purple-500/[0.03] rounded-full blur-3xl animate-float-3" />
          <div className="absolute top-[18%] left-[10%] w-3 h-3 bg-accent/30 rounded-full animate-float-2" />
          <div className="absolute top-[30%] right-[22%] w-2.5 h-2.5 bg-accent/20 rounded-full animate-float-3" />
          <div className="absolute bottom-[25%] left-[22%] w-4 h-4 border-2 border-accent/20 rounded-full animate-float-1" />
          <div className="absolute top-[65%] right-[12%] w-3 h-3 border-2 border-accent/15 rotate-45 animate-float-2" />
          <div className="absolute top-[12%] right-[30%] w-20 h-[2px] bg-gradient-to-r from-accent/20 to-transparent rotate-[25deg] animate-float-3" />
          <div className="absolute bottom-[18%] left-[35%] w-16 h-[2px] bg-gradient-to-r from-transparent to-accent/15 -rotate-[15deg] animate-float-1" />
          <div className="absolute top-[45%] left-[5%] w-2 h-2 bg-accent/25 rounded-sm rotate-45 animate-float-3" />
          <div className="absolute top-[8%] right-[4%] grid grid-cols-5 gap-3.5 opacity-[0.12]">
            {Array.from({ length: 25 }).map((_, i) => (<div key={`dt-${i}`} className="w-1 h-1 bg-accent rounded-full" />))}
          </div>
          <div className="absolute bottom-[12%] left-[2%] grid grid-cols-4 gap-3 opacity-[0.08]">
            {Array.from({ length: 16 }).map((_, i) => (<div key={`db-${i}`} className="w-1 h-1 bg-foreground rounded-full" />))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 w-full">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="md:col-span-3">
              <ScrollReveal variant="blur">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-accent/20 bg-accent/[0.05] backdrop-blur-sm text-xs font-semibold text-accent tracking-wide mb-8 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  Available for New Engagements
                </div>
              </ScrollReveal>
              <ScrollReveal variant="blur" delay={100}>
                <h1 className="font-[family-name:var(--font-jakarta)] text-4xl md:text-[3.5rem] lg:text-[4.2rem] font-extrabold leading-[1.05] tracking-tight mb-8">
                  I don&apos;t run campaigns.
                  <br />
                  <span className="text-gradient-animated">I build revenue engines.</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal variant="blur" delay={200}>
                <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-xl">
                  Meta Ads. Google PPC. SEO. Senior-level performance marketing for US businesses that need measurable growth — not guesswork.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="blur" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-shine group inline-flex items-center justify-center gap-2.5 bg-foreground text-white font-semibold px-8 py-4 rounded-xl hover:bg-foreground-secondary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-glow">
                    Book a Free Strategy Call
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                  <Link href="/services" className="group inline-flex items-center justify-center gap-2 border-2 border-border-strong text-foreground font-semibold px-8 py-4 rounded-xl hover:border-accent hover:text-accent hover:bg-accent/[0.03] transition-all duration-300">
                    View Services
                    <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <ScrollReveal variant="scale" delay={200}>
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full border-2 border-dashed border-accent/15 animate-spin-slow" />
                  <div className="absolute -inset-16 rounded-full border border-accent/[0.07] animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
                  <div className="relative w-64 h-80 md:w-[19rem] md:h-[24rem] rounded-2xl overflow-hidden border-2 border-white/80 shadow-2xl">
                    <SafeImage src="/images/ureb-neon-portrait.webp" alt="Ureb Arif, growth and performance marketing consultant" loading="eager" className="w-full h-full object-cover object-[50%_32%]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -top-5 -right-5 bg-white shadow-xl rounded-xl px-4 py-2.5 animate-float-1 border border-border">
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-extrabold text-lg font-[family-name:var(--font-jakarta)]">7+</span>
                      <span className="text-[10px] text-muted font-medium leading-tight">Years<br />Exp.</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-foreground text-white shadow-xl rounded-xl px-4 py-2.5 animate-float-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span className="text-xs font-bold">Top Rated</span>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-14 bg-white shadow-lg rounded-xl px-3.5 py-2 animate-float-3 border border-border hidden md:block">
                    <span className="text-accent font-extrabold text-sm font-[family-name:var(--font-jakarta)]">$2M+</span>
                    <span className="text-[9px] text-muted block leading-tight">Ad Spend</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="border-y border-border bg-white" aria-label="Key statistics">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center group">
                <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground transition-colors group-hover:text-accent">
                  <CountUp end={100} suffix="+" duration={2200} />
                </p>
                <p className="text-xs text-muted-light mt-2 uppercase tracking-wider font-medium">Brands Served</p>
              </div>
              <div className="text-center group">
                <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground transition-colors group-hover:text-accent">
                  <CountUp end={7} suffix="+" duration={1500} />
                </p>
                <p className="text-xs text-muted-light mt-2 uppercase tracking-wider font-medium">Years Experience</p>
              </div>
              <div className="text-center group">
                <p className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground transition-colors group-hover:text-accent">
                  <CountUp end={2} prefix="$" suffix="M+" duration={1800} />
                </p>
                <p className="text-xs text-muted-light mt-2 uppercase tracking-wider font-medium">Ad Spend Managed</p>
              </div>
              <div className="text-center group">
                <div className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold text-foreground transition-colors group-hover:text-accent flex items-center justify-center gap-2">
                  <svg className="w-7 h-7 md:w-9 md:h-9 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-2xl md:text-3xl">Top Rated</span>
                </div>
                <p className="text-xs text-muted-light mt-2 uppercase tracking-wider font-medium">Upwork Status</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Personal visual story ─── */}
      <section className="py-16 md:py-24 bg-surface border-b border-border" aria-labelledby="visual-story-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
              <div className="max-w-2xl">
                <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Behind the strategy</p>
                <h2 id="visual-story-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">
                  Strategy is analytical. The person behind it should still feel human.
                </h2>
              </div>
              <Link href="/gallery" className="text-sm font-semibold text-foreground hover:text-accent transition-colors inline-flex items-center gap-1 group">
                View photo gallery
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-12 gap-4 md:gap-5">
            <ScrollReveal variant="scale" className="md:col-span-5">
              <div className="relative min-h-[520px] md:min-h-[620px] rounded-3xl overflow-hidden bg-foreground shadow-xl">
                <SafeImage src="/images/ureb-japan-lantern.webp" alt="Ureb Arif photographed during travel in Japan" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-6 pt-24 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">Digital growth strategist</p>
                  <p className="font-[family-name:var(--font-jakarta)] text-2xl font-bold">Numbers on the dashboard. Curiosity everywhere else.</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5">
              <ScrollReveal variant="scale" delay={100}>
                <div className="relative min-h-[360px] md:min-h-[620px] rounded-3xl overflow-hidden bg-foreground">
                  <SafeImage src="/images/ureb-japan-lantern.webp" alt="Ureb Arif photographed during travel in Japan" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </ScrollReveal>
              <ScrollReveal variant="scale" delay={180}>
                <div className="relative min-h-[360px] md:min-h-[620px] rounded-3xl overflow-hidden bg-[#efe5c9]">
                  <img src="/images/ureb-digital-growth.webp" alt="Ureb Arif — Your Digital Growth Strategist" width={900} height={1130} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-24 md:py-32" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
              <div className="max-w-lg">
                <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">What I Do</p>
                <h2 id="services-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">Performance marketing that moves the needle</h2>
              </div>
              <Link href="/services" className="text-sm font-semibold text-foreground hover:text-accent transition-colors inline-flex items-center gap-1 shrink-0 group">
                All services <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120} variant="blur">
                <Link href={s.href} className="group block border border-border rounded-2xl p-8 card-hover bg-white relative overflow-hidden">
                  <div className="absolute top-6 right-6 font-[family-name:var(--font-jakarta)] text-5xl font-extrabold text-foreground/[0.03] select-none">{s.num}</div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-jakarta)] text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Learn more <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Results ─── */}
      <section className="bg-foreground text-white py-24 md:py-32 relative overflow-hidden" aria-labelledby="results-heading">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/[0.06] rounded-full blur-3xl animate-float-1" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/[0.04] rounded-full blur-3xl animate-float-2" />
          <div className="absolute top-[20%] right-[5%] w-3 h-3 bg-accent/20 rounded-full animate-float-3" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="max-w-lg mb-16">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Proven Results</p>
              <h2 id="results-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Numbers, not promises</h2>
              <p className="text-zinc-400 text-lg">Measurable outcomes from real campaigns across US industries.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0} variant="blur">
              <div className="border border-zinc-800 rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 bg-zinc-900/50 backdrop-blur-sm group animate-border-pulse">
                <p className="font-[family-name:var(--font-jakarta)] text-5xl md:text-6xl font-extrabold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  <CountUp end={4.2} suffix="x" decimals={1} duration={2500} />
                </p>
                <p className="font-semibold text-lg mb-1">ROAS</p>
                <p className="text-zinc-500 text-sm mb-4">Rehab center, Houston TX</p>
                <p className="text-zinc-600 text-xs leading-relaxed border-t border-zinc-800 pt-4">Full-funnel Meta + Google Ads with HIPAA-compliant targeting</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150} variant="blur">
              <div className="border border-zinc-800 rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 bg-zinc-900/50 backdrop-blur-sm group animate-border-pulse" style={{ animationDelay: "1s" }}>
                <p className="font-[family-name:var(--font-jakarta)] text-5xl md:text-6xl font-extrabold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  <CountUp end={67} suffix="%" duration={2200} />
                </p>
                <p className="font-semibold text-lg mb-1">Lower CPL</p>
                <p className="text-zinc-500 text-sm mb-4">Automotive dealers, US</p>
                <p className="text-zinc-600 text-xs leading-relaxed border-t border-zinc-800 pt-4">Geo-targeted inventory campaigns with call tracking</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300} variant="blur">
              <div className="border border-zinc-800 rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 bg-zinc-900/50 backdrop-blur-sm group animate-border-pulse" style={{ animationDelay: "2s" }}>
                <p className="font-[family-name:var(--font-jakarta)] text-5xl md:text-6xl font-extrabold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  <CountUp end={3} suffix="x" duration={1800} />
                </p>
                <p className="font-semibold text-lg mb-1">Lead Volume</p>
                <p className="text-zinc-500 text-sm mb-4">Exterior cleaning, FL</p>
                <p className="text-zinc-600 text-xs leading-relaxed border-t border-zinc-800 pt-4">Hyper-local Meta campaigns by zip code + Google LSA</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Why Me ─── */}
      <section className="py-24 md:py-32" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Why Work With Me</p>
              <h2 id="why-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Not another marketing agency</h2>
              <p className="text-muted text-lg">I left the agency world because I saw how it fails clients. Here&apos;s what you get instead.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 120} variant="blur">
                <div className="relative p-8 rounded-2xl border border-border bg-white card-hover group">
                  <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                    <span className="text-white font-[family-name:var(--font-jakarta)] font-extrabold text-sm">0{i + 1}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-3">{d.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Consultant vs Agency ─── */}
      <section className="bg-surface border-y border-border py-24 md:py-32" aria-labelledby="compare-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">The Difference</p>
              <h2 id="compare-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">Independent consultant vs. typical agency</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100} variant="blur">
            <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-card">
              <div className="grid grid-cols-3 bg-foreground text-white">
                <div className="p-5 text-sm font-semibold" />
                <div className="p-5 text-sm font-semibold text-center border-l border-zinc-800">Working with me</div>
                <div className="p-5 text-sm font-semibold text-center border-l border-zinc-800">Typical agency</div>
              </div>
              {comparison.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 group hover:bg-accent/[0.02] transition-colors duration-200 ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}>
                  <div className="p-5 text-sm font-semibold text-foreground border-t border-border">{row.feature}</div>
                  <div className="p-5 text-sm text-foreground border-t border-l border-border text-center font-medium group-hover:text-accent transition-colors">{row.me}</div>
                  <div className="p-5 text-sm text-muted border-t border-l border-border text-center">{row.agency}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Industries ─── */}
      <section className="py-24 md:py-32" aria-labelledby="ind-heading">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Industries</p>
              <h2 id="ind-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Deep expertise where it matters</h2>
              <p className="text-muted">These are industries where I&apos;ve spent real ad budgets, built real campaigns, and delivered measurable results.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={i * 80} variant={i % 2 === 0 ? "blur" : "scale"}>
                <Link href="/industries" className="group flex items-center gap-3 bg-white border border-border rounded-xl p-5 card-hover">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ind.icon} /></svg>
                  </div>
                  <span className="text-sm font-semibold group-hover:text-accent transition-colors duration-300">{ind.name}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="bg-foreground text-white py-24 md:py-32 relative overflow-hidden" aria-labelledby="process-heading">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 border border-zinc-800 rounded-full animate-spin-slow" style={{ animationDuration: "40s" }} />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 border border-zinc-800 rounded-full animate-spin-slow" style={{ animationDuration: "35s", animationDirection: "reverse" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">How It Works</p>
              <h2 id="process-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight mb-4">From first call to measurable growth</h2>
              <p className="text-zinc-400 text-lg">A clear, proven process. No surprises, no ambiguity.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {process.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 120} variant="blur">
                <div className="border border-zinc-800 rounded-2xl p-8 hover:border-accent/20 transition-all duration-500 bg-zinc-900/30 group">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent font-[family-name:var(--font-jakarta)] font-extrabold text-sm mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">{s.step}</span>
                  <h3 className="font-[family-name:var(--font-jakarta)] text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <p className="text-zinc-600 text-xs border-t border-zinc-800 pt-4">{s.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 md:py-32" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">FAQ</p>
              <h2 id="faq-heading" className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">Common questions</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={i * 60}>
                <div className="bg-white border border-border rounded-2xl p-7 md:p-8 hover:border-accent/30 hover:shadow-md transition-all duration-300 group">
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-base mb-3 group-hover:text-accent transition-colors duration-200">{faq.question}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden" aria-label="Call to action">
        <div className="bg-gradient-cta py-24 md:py-32 relative">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-3xl animate-float-2" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6">
            <ScrollReveal variant="blur">
              <div className="text-center">
                <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-6">Limited Availability</p>
                <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Ready to stop guessing and<br className="hidden md:block" /> start growing?</h2>
                <p className="text-zinc-400 text-lg mb-4 max-w-xl mx-auto">I work with a select number of clients to ensure hands-on attention and measurable ROI. Let&apos;s see if we&apos;re a fit.</p>
                <div className="flex items-center justify-center gap-6 text-sm text-zinc-500 mb-10 flex-wrap">
                  <span className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Free 30-min call</span>
                  <span className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>No obligation</span>
                  <span className="flex items-center gap-2"><svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Custom audit included</span>
                </div>
                <Link href="/contact" className="btn-shine group inline-flex items-center gap-2 bg-white text-foreground font-bold px-12 py-5 rounded-xl hover:bg-zinc-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base animate-glow">
                  Book Your Free Strategy Call
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountUp } from "@/components/count-up";

interface KPI {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

interface TimelineItem {
  month: string;
  title: string;
  desc: string;
}

interface BeforeAfter {
  metric: string;
  before: string;
  after: string;
}

export interface CaseStudyData {
  industry: string;
  location: string;
  headline: string;
  heroResult: string;
  platforms: string[];
  duration: string;
  kpis: KPI[];
  challenge: string[];
  strategy: { title: string; desc: string }[];
  beforeAfter: BeforeAfter[];
  timeline: TimelineItem[];
  takeaway: string;
}

export function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28" aria-label="Case study hero">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-[10%] right-[8%] w-80 h-80 bg-accent/[0.07] rounded-full blur-3xl animate-float-1" />
          <div className="absolute bottom-[5%] left-[3%] w-96 h-96 bg-accent/[0.04] rounded-full blur-3xl animate-float-2" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <Link href="/case-studies" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1 mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              All Case Studies
            </Link>
          </ScrollReveal>
          <ScrollReveal variant="blur" delay={100}>
            <div className="flex flex-wrap gap-2 mb-4">
              {data.platforms.map((p) => (
                <span key={p} className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">{p}</span>
              ))}
            </div>
            <p className="text-sm text-muted mb-2">{data.industry} — {data.location}</p>
            <h1 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">{data.headline}</h1>
            <p className="text-accent text-xl md:text-2xl font-bold mb-2">{data.heroResult}</p>
            <p className="text-sm text-muted">Campaign duration: {data.duration}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-border bg-white py-14" aria-label="Key metrics">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.kpis.map((kpi) => (
                <div key={kpi.label} className="text-center group">
                  <p className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold text-foreground group-hover:text-accent transition-colors">
                    <CountUp end={kpi.value} prefix={kpi.prefix} suffix={kpi.suffix} decimals={kpi.decimals} duration={2200} />
                  </p>
                  <p className="text-xs text-muted mt-2 uppercase tracking-wider font-medium">{kpi.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-24" aria-labelledby="challenge-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">The Challenge</p>
            <h2 id="challenge-heading" className="font-[family-name:var(--font-jakarta)] text-2xl md:text-3xl font-extrabold tracking-tight mb-8">What we were up against</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {data.challenge.map((c, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 bg-surface border border-border rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" /></svg>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{c}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-white py-20 md:py-24 relative overflow-hidden" aria-labelledby="strategy-heading">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/[0.06] rounded-full blur-3xl animate-float-1" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">The Strategy</p>
            <h2 id="strategy-heading" className="font-[family-name:var(--font-jakarta)] text-2xl md:text-3xl font-extrabold tracking-tight mb-10">How we solved it</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {data.strategy.map((s, i) => (
              <ScrollReveal key={i} delay={i * 100} variant="blur">
                <div className="flex items-start gap-5 border border-zinc-800 rounded-2xl p-7 bg-zinc-900/30 hover:border-accent/20 transition-all duration-500 group">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent font-[family-name:var(--font-jakarta)] font-extrabold text-sm shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-2">{s.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" aria-labelledby="results-heading">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">The Results</p>
            <h2 id="results-heading" className="font-[family-name:var(--font-jakarta)] text-2xl md:text-3xl font-extrabold tracking-tight mb-10">Before vs. After</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.beforeAfter.map((ba, i) => (
              <ScrollReveal key={i} delay={i * 100} variant="blur">
                <div className="border border-border rounded-2xl overflow-hidden bg-white card-hover">
                  <div className="p-5 border-b border-border">
                    <p className="text-sm font-bold text-foreground">{ba.metric}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="p-5 bg-red-50/50 border-r border-border">
                      <p className="text-[10px] uppercase tracking-wider text-muted mb-1 font-semibold">Before</p>
                      <p className="font-[family-name:var(--font-jakarta)] text-xl font-extrabold text-red-600">{ba.before}</p>
                    </div>
                    <div className="p-5 bg-green-50/50">
                      <p className="text-[10px] uppercase tracking-wider text-muted mb-1 font-semibold">After</p>
                      <p className="font-[family-name:var(--font-jakarta)] text-xl font-extrabold text-green-600">{ba.after}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-20 md:py-24" aria-labelledby="timeline-heading">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">Campaign Timeline</p>
            <h2 id="timeline-heading" className="font-[family-name:var(--font-jakarta)] text-2xl md:text-3xl font-extrabold tracking-tight mb-10">Month-by-month progress</h2>
          </ScrollReveal>
          <div className="space-y-0">
            {data.timeline.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative pl-8 pb-10 last:pb-0 border-l-2 border-border last:border-l-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-accent" />
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">{t.month}</p>
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold mb-1">{t.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-label="Key takeaway">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg mb-2">Key Takeaway</h3>
                  <p className="text-muted text-sm leading-relaxed">{data.takeaway}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gradient-cta py-20 md:py-24" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal variant="blur">
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-white tracking-tight mb-4">Want results like these?</h2>
            <p className="text-zinc-400 text-lg mb-8">Book a free strategy call. I&apos;ll audit your current campaigns and show you specific opportunities for your business.</p>
            <Link href="/contact" className="btn-shine group inline-flex items-center gap-2 bg-white text-foreground font-bold px-10 py-4 rounded-xl hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg animate-glow">
              Get Similar Results
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

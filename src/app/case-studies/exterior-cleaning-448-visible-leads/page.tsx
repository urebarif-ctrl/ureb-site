import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { ExteriorHero, ProofStats, CaseStudyCards, BlogCluster, RelatedExteriorLinks, ExteriorCta } from "@/components/exterior-cleaning-specialist";
import { ExteriorCampaignProof } from "@/components/exterior-campaign-proof";

export const metadata: Metadata = {
  title: "Exterior Cleaning Meta Ads Case Study | 448 Visible Leads",
  description: "Meta Ads case study for an exterior cleaning business: 448 visible leads across June to August 2026, about $13.32 visible average CPL, window cleaning and pressure washing campaigns.",
  alternates: { canonical: `${SITE_URL}/case-studies/exterior-cleaning-448-visible-leads` },
  openGraph: {
    title: "Exterior Cleaning Meta Ads Case Study | 448 Visible Leads",
    description: "How service-specific Meta Ads campaigns generated visible lead volume for window cleaning and pressure washing offers.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const monthly = [
  { month: "June 2026", leads: "124", cpl: "$12.05", note: "Strong early window cleaning campaigns and controlled CPL." },
  { month: "July 2026", leads: "157", cpl: "$14.07", note: "Pressure washing and window cleaning tests expanded." },
  { month: "August 2026", leads: "167", cpl: "$13.54", note: "More stable lead volume while keeping visible CPL efficient." },
];

const actions = [
  "Separated window cleaning, pressure washing, roof washing and related exterior cleaning offers instead of mixing every service into one generic campaign.",
  "Reviewed cost per lead, lead volume, frequency, reach and delivery stability before scaling or pausing campaigns.",
  "Used service-area targeting and homeowner-focused messaging to keep campaigns relevant to local demand.",
  "Adjusted weak tests quickly and gave stronger creatives and offers more budget room.",
  "Kept the reporting client-safe by redacting account names while keeping campaign metrics visible.",
];

export default function ExteriorCleaning448LeadsCaseStudy() {
  return (
    <main>
      <ExteriorHero
        eyebrow="Case study · Meta Ads for exterior cleaning"
        title="448 Visible Leads for an Exterior Cleaning Business"
        description="A practical Meta Ads case study built around window cleaning and pressure washing campaigns. The visible June to August reporting rows showed 448 leads at about $13.32 visible average CPL."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ProofStats />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface/70 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">The problem</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">Exterior cleaning needed service-specific lead generation.</h2>
            <p className="text-muted leading-relaxed mt-6">The business was not selling one simple service. Window cleaning, pressure washing, roof washing and related exterior services each had different customer intent, different job value and different creative angles. The account needed campaign separation, budget control and a clear way to understand what was producing qualified homeowner enquiries.</p>
            <p className="text-muted leading-relaxed mt-4">The goal was not just cheap form submissions. The goal was useful local enquiries that could become scheduled estimates and booked jobs.</p>
          </div>
          <div className="rounded-3xl bg-white border border-border p-7 shadow-sm">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Visible monthly performance</p>
            <div className="space-y-4">
              {monthly.map((row) => (
                <div key={row.month} className="rounded-2xl border border-border bg-surface p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-foreground">{row.month}</h3>
                    <span className="text-sm font-semibold text-accent">{row.cpl} visible CPL</span>
                  </div>
                  <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold mt-2">{row.leads} leads</p>
                  <p className="text-sm text-muted mt-2">{row.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Execution</p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">How the campaigns were managed.</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {actions.map((item, index) => (
              <div key={item} className="rounded-2xl border border-border bg-surface p-6">
                <span className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-accent/40">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-semibold text-foreground leading-relaxed mt-3">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface/70 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Positioning</p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">Why this matters for exterior cleaning companies.</h2>
          <div className="grid lg:grid-cols-3 gap-5 mt-10">
            {[
              ["Window cleaning", "Before-after visuals, clean glass transformations, service-area targeting and homeowner trust signals matter."],
              ["Pressure washing / power washing", "Driveways, siding, patios and concrete need fast visual proof plus strong local offer testing."],
              ["Roof washing", "Higher-ticket demand needs stronger qualifying questions, proof and careful follow-up."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl bg-white border border-border p-7 shadow-sm">
                <h3 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold">{title}</h3>
                <p className="text-muted leading-relaxed mt-4">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/industries/exterior-cleaning" className="rounded-full bg-foreground text-white px-6 py-3 font-bold">Exterior cleaning specialist page</Link>
            <Link href="/services/exterior-cleaning-meta-ads" className="rounded-full border border-border bg-white px-6 py-3 font-bold">Meta Ads service page</Link>
          </div>
        </div>
      </section>

      <ExteriorCampaignProof />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Related proof</p>
          <CaseStudyCards />
          <div className="mt-12">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Related blogs</p>
            <BlogCluster />
          </div>
        </div>
      </section>
      <RelatedExteriorLinks current="/case-studies/exterior-cleaning-448-visible-leads" />
      <ExteriorCta />
    </main>
  );
}

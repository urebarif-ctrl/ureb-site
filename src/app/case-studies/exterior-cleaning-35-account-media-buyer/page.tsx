import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { ExteriorHero, ProofStats, CaseStudyCards, BlogCluster, RelatedExteriorLinks, ExteriorCta } from "@/components/exterior-cleaning-specialist";

export const metadata: Metadata = {
  title: "Lead Meta Ads Media Buyer for 35+ Exterior Cleaning Accounts",
  description: "Case study for Ureb Arif as a lead Meta Ads media buyer managing 35+ window cleaning and exterior cleaning ad accounts across roof washing, pressure washing, soft washing, solar cleaning and holiday lighting.",
  alternates: { canonical: `${SITE_URL}/case-studies/exterior-cleaning-35-account-media-buyer` },
  openGraph: {
    title: "Lead Meta Ads Media Buyer for 35+ Exterior Cleaning Accounts",
    description: "Agency-side Meta Ads media buying proof across exterior cleaning, window cleaning, pressure washing, roof washing, solar cleaning and holiday lighting accounts.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const responsibilities = [
  "Managed daily Meta Ads checks across multiple exterior cleaning advertisers.",
  "Reviewed campaign delivery, cost per lead, budget pacing, lead volume and lead quality.",
  "Handled campaign QA before launch, including offer, service area, lead form and tracking checks.",
  "Tested new campaign structures, creative hooks and local-service angles.",
  "Paused weak performers and scaled the campaign approaches that produced stronger results.",
  "Supported agency operations with media buying decisions across 35+ client ad accounts.",
];

const accountTypes = [
  "Window cleaning",
  "Pressure washing",
  "Power washing",
  "Soft washing",
  "Roof washing",
  "Solar cleaning",
  "Holiday lighting",
  "Gutter cleaning",
  "Water heater cleaning",
  "Exterior home services",
];

export default function ExteriorCleaning35AccountsCaseStudy() {
  return (
    <main>
      <ExteriorHero
        eyebrow="Case study · Lead media buyer"
        title="Lead Meta Ads Media Buyer Across 35+ Exterior Cleaning Accounts"
        description="An agency-side media buying case study focused on multi-account Meta Ads management for window cleaning, roof washing, pressure washing, soft washing, holiday lighting and related exterior home service businesses."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ProofStats />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface/70 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Role</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">A lead buyer role, not a single-account campaign.</h2>
            <p className="text-muted leading-relaxed mt-6">This work required more than building a campaign and checking results once a week. It involved active multi-account media buying inside an agency environment, where each local service client had different service areas, budgets, offers, creative quality and lead follow-up requirements.</p>
            <p className="text-muted leading-relaxed mt-4">The public review for this work confirms management and optimization across 35+ window cleaning and exterior cleaning accounts, with a focus on qualified leads and efficient cost per lead.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/industries/exterior-cleaning" className="rounded-full bg-foreground text-white px-6 py-3 font-bold">Exterior cleaning specialist</Link>
              <Link href="/case-studies/exterior-cleaning-448-visible-leads" className="rounded-full border border-border bg-white px-6 py-3 font-bold">See campaign proof</Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white border border-border p-7 shadow-sm">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Accounts covered</p>
            <div className="grid grid-cols-2 gap-3">
              {accountTypes.map((item) => (
                <span key={item} className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Responsibilities</p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">What I handled as lead media buyer.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {responsibilities.map((item, index) => (
              <div key={item} className="rounded-2xl border border-border bg-surface p-6">
                <span className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-accent/40">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-semibold text-foreground leading-relaxed mt-3">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface/70 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="rounded-3xl bg-white border border-border p-7 shadow-sm">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">What made this different</p>
            <h3 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold">Exterior cleaning campaigns need local operating context.</h3>
            <p className="text-muted leading-relaxed mt-5">A roof washing campaign should not be optimized the same way as a window cleaning campaign. Holiday lighting has seasonality. Pressure washing and power washing depend heavily on visual proof. Solar cleaning and gutter cleaning need the right offer, timing and service-area targeting.</p>
          </div>
          <div className="rounded-3xl bg-foreground text-white p-7 shadow-sm">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Media buying principle</p>
            <h3 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold">The real KPI is not cheap leads.</h3>
            <p className="text-white/70 leading-relaxed mt-5">The job was to support qualified local enquiries that could turn into estimates and booked jobs. That meant campaign decisions had to consider CPL, lead quality, market context, follow-up speed, service category and the actual value of the booked work.</p>
          </div>
        </div>
      </section>

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
      <RelatedExteriorLinks current="/case-studies/exterior-cleaning-35-account-media-buyer" />
      <ExteriorCta />
    </main>
  );
}

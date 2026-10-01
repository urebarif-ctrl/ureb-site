import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { ExteriorHero, ProofStats, CaseStudyCards, BlogCluster, RelatedExteriorLinks, ExteriorCta } from "@/components/exterior-cleaning-specialist";

export const metadata: Metadata = {
  title: "Meta Ads for Exterior Cleaning Companies | Ureb Arif",
  description: "Meta Ads management for exterior cleaning companies including roof washing, window cleaning, pressure washing, power washing, holiday lighting, water heater cleaning and related local services.",
  alternates: { canonical: `${SITE_URL}/services/exterior-cleaning-meta-ads` },
};

const phases = [
  ["Audit", "Review account structure, offer, service area, tracking, lead forms, campaign history and lead quality issues."],
  ["Build", "Create service-specific campaigns for window cleaning, roof washing, pressure washing, power washing, holiday lighting and related services."],
  ["Optimize", "Monitor CPL, lead volume, frequency, creative fatigue, delivery issues and budget pacing."],
  ["Scale", "Move budget toward campaign structures and creative angles that produce better local enquiries."],
];

export default function ExteriorCleaningMetaAdsService() {
  return (
    <main>
      <ExteriorHero
        eyebrow="Meta Ads service"
        title="Meta Ads for Exterior Cleaning Companies"
        description="Campaign planning, launch support and media buying for exterior cleaning businesses that want qualified local leads, not just cheap form fills. Built for roof washing, window cleaning, pressure washing, power washing, water heater cleaning, holiday lighting and home services."
      />
      <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><ProofStats /></div></section>
      <section className="py-16 md:py-20 bg-surface/70 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Process</p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">A practical media buying system for local service demand.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {phases.map(([title, desc]) => (
              <div key={title} className="rounded-3xl bg-white border border-border p-7 shadow-sm">
                <h3 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold">{title}</h3>
                <p className="text-muted leading-relaxed mt-4">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">What I focus on</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">Qualified enquiries, clear offers and booked-job potential.</h2>
            <p className="text-muted leading-relaxed mt-6">For exterior cleaning, the creative needs to show the result, the targeting needs to reflect service areas, and the follow-up needs to happen quickly. I use Meta Ads to test the right combination of offer, local targeting, service angle and lead form questions.</p>
          </div>
          <div className="rounded-3xl bg-foreground text-white p-7">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Best-fit services</p>
            <ul className="space-y-3 text-white/80">
              {['Window cleaning campaigns','Roof washing campaigns','Pressure washing and power washing leads','Holiday lighting seasonal campaigns','Water heater cleaning and maintenance keywords','Soft washing and gutter cleaning offers'].map((item)=><li key={item}>— {item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-surface/70 border-y border-border"><div className="max-w-6xl mx-auto px-6"><CaseStudyCards /></div></section>
      <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><BlogCluster /><div className="mt-10"><Link href="/contact" className="rounded-full bg-foreground text-white px-6 py-3 font-bold">Request account review</Link></div></div></section>
      <RelatedExteriorLinks current="/services/exterior-cleaning-meta-ads" />
      <ExteriorCta />
    </main>
  );
}

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { ExteriorHero, ProofStats, CaseStudyCards, BlogCluster, RelatedExteriorLinks, ExteriorCta, PillCloud } from "@/components/exterior-cleaning-specialist";

export const metadata: Metadata = { title: "Pressure Washing Marketing Specialist | Lead Generation", description: "Pressure washing marketing and Meta Ads lead generation for exterior cleaning companies. Campaigns for driveways, siding, patios, concrete and homeowner enquiries.", alternates: { canonical: `${SITE_URL}/industries/pressure-washing-marketing` } };

export default function PressureWashingMarketingPage(){
 return <main>
  <ExteriorHero eyebrow="Pressure washing marketing" title="Pressure Washing Lead Generation for Local Service Companies" description="Campaign strategy for pressure washing businesses that need more qualified local leads for driveways, siding, patios, concrete cleaning, house washing and exterior cleaning jobs." />
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><ProofStats /></div></section>
  <section className="py-16 md:py-20 bg-surface/70 border-y border-border"><div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12"><div><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Pressure washing strategy</p><h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">Pressure washing campaigns should sell the visible transformation.</h2><p className="text-muted leading-relaxed mt-6">The best pressure washing ads make the dirty-to-clean result obvious. I focus on local service-area targeting, before-after creative, clear estimate offers and budget control around real lead quality.</p></div><div className="rounded-3xl border border-border bg-white p-7 shadow-sm"><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Related keywords</p><PillCloud items={["pressure washing leads","driveway cleaning ads","concrete cleaning leads","house washing campaign","patio cleaning ads","siding cleaning leads","local pressure washing marketing"]}/></div></div></section>
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><CaseStudyCards /><div className="mt-12"><BlogCluster /></div></div></section><RelatedExteriorLinks current="/industries/pressure-washing-marketing"/><ExteriorCta />
 </main>;
}

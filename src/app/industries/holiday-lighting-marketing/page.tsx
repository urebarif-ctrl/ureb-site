import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { ExteriorHero, ProofStats, CaseStudyCards, BlogCluster, RelatedExteriorLinks, ExteriorCta, PillCloud } from "@/components/exterior-cleaning-specialist";

export const metadata: Metadata = { title: "Holiday Lighting Marketing Specialist | Seasonal Lead Generation", description: "Holiday lighting marketing for exterior cleaning companies and home service businesses. Seasonal Meta Ads strategy, lead forms, local targeting and budget pacing.", alternates: { canonical: `${SITE_URL}/industries/holiday-lighting-marketing` } };

export default function HolidayLightingMarketingPage(){
 return <main>
  <ExteriorHero eyebrow="Holiday lighting marketing" title="Holiday Lighting Lead Generation for Exterior Service Companies" description="Seasonal campaign strategy for exterior cleaning companies that offer holiday lighting installation, Christmas lights, seasonal décor and winter home service packages." />
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><ProofStats /></div></section>
  <section className="py-16 md:py-20 bg-surface/70 border-y border-border"><div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12"><div><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Seasonal strategy</p><h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">Holiday lighting campaigns need timing, urgency and fast follow-up.</h2><p className="text-muted leading-relaxed mt-6">Holiday lighting is not an always-on service. The campaign window is short, so budget pacing, creative refreshes, early quote capture and quick follow-up matter more than usual. I structure seasonal ads around urgency, location and booked-install capacity.</p></div><div className="rounded-3xl border border-border bg-white p-7 shadow-sm"><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Related keywords</p><PillCloud items={["holiday lighting leads","Christmas light installation ads","seasonal lighting marketing","holiday lights Meta Ads","winter home services","local Christmas lights campaign","holiday lighting lead forms"]}/></div></div></section>
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><CaseStudyCards /><div className="mt-12"><BlogCluster /></div></div></section><RelatedExteriorLinks current="/industries/holiday-lighting-marketing"/><ExteriorCta />
 </main>;
}

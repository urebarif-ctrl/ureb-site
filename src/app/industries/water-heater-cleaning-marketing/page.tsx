import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { ExteriorHero, ProofStats, CaseStudyCards, BlogCluster, RelatedExteriorLinks, ExteriorCta, PillCloud } from "@/components/exterior-cleaning-specialist";

export const metadata: Metadata = { title: "Water Heater Cleaning Marketing | Home Services Lead Generation", description: "Water heater cleaning marketing and lead generation support for home service companies using Meta Ads, local targeting, service-area campaigns and qualified enquiry systems.", alternates: { canonical: `${SITE_URL}/industries/water-heater-cleaning-marketing` } };

export default function WaterHeaterCleaningMarketingPage(){
 return <main>
  <ExteriorHero eyebrow="Water heater cleaning marketing" title="Water Heater Cleaning Lead Generation for Home Service Companies" description="A service-specific page for water heater cleaning and maintenance campaigns, built around local homeowner intent, clear service education, lead qualification and fast follow-up." />
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><ProofStats /></div></section>
  <section className="py-16 md:py-20 bg-surface/70 border-y border-border"><div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12"><div><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Home services strategy</p><h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">Water heater cleaning needs education-led local marketing.</h2><p className="text-muted leading-relaxed mt-6">Unlike visual exterior cleaning services, water heater cleaning and maintenance often need more explanation. The campaign should educate homeowners, clarify the benefit, qualify the service need and connect the lead to a fast estimate or inspection process.</p></div><div className="rounded-3xl border border-border bg-white p-7 shadow-sm"><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Related keywords</p><PillCloud items={["water heater cleaning leads","water heater maintenance ads","local home service marketing","water heater service campaign","homeowner maintenance leads","Meta Ads for home services","qualified service enquiries"]}/></div></div></section>
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><CaseStudyCards /><div className="mt-12"><BlogCluster /></div></div></section><RelatedExteriorLinks current="/industries/water-heater-cleaning-marketing"/><ExteriorCta />
 </main>;
}

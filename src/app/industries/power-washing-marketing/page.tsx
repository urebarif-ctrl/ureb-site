import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { ExteriorHero, ProofStats, CaseStudyCards, BlogCluster, RelatedExteriorLinks, ExteriorCta, PillCloud } from "@/components/exterior-cleaning-specialist";

export const metadata: Metadata = { title: "Power Washing Marketing Specialist | Meta Ads Lead Generation", description: "Power washing marketing for exterior cleaning companies. Meta Ads and lead generation strategy for high-intent local homeowners and commercial cleaning enquiries.", alternates: { canonical: `${SITE_URL}/industries/power-washing-marketing` } };

export default function PowerWashingMarketingPage(){
 return <main>
  <ExteriorHero eyebrow="Power washing marketing" title="Power Washing Campaigns Built Around Local Demand" description="A dedicated page for power washing companies that need qualified local leads, better service-area targeting, sharper campaign offers and clearer reporting across Meta Ads and lead generation funnels." />
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><ProofStats /></div></section>
  <section className="py-16 md:py-20 bg-surface/70 border-y border-border"><div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12"><div><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Power washing strategy</p><h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">Power washing is often searched differently from pressure washing.</h2><p className="text-muted leading-relaxed mt-6">Power washing pages and ads should capture the language customers actually use. I build content and campaigns around both pressure washing and power washing terms while keeping offers clear and local.</p></div><div className="rounded-3xl border border-border bg-white p-7 shadow-sm"><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Related keywords</p><PillCloud items={["power washing leads","power washing ads","hot water power washing","commercial power washing","driveway power washing","local power washing marketing","power washing Meta Ads"]}/></div></div></section>
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><CaseStudyCards /><div className="mt-12"><BlogCluster /></div></div></section><RelatedExteriorLinks current="/industries/power-washing-marketing"/><ExteriorCta />
 </main>;
}

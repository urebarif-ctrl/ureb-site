import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { ExteriorHero, ProofStats, CaseStudyCards, BlogCluster, RelatedExteriorLinks, ExteriorCta, PillCloud } from "@/components/exterior-cleaning-specialist";

export const metadata: Metadata = { title: "Roof Washing Marketing Specialist | Roof Cleaning Meta Ads", description: "Roof washing and roof cleaning marketing for exterior cleaning companies. Meta Ads strategy, local targeting, qualified leads and campaign optimization for higher-value roof cleaning jobs.", alternates: { canonical: `${SITE_URL}/industries/roof-washing-marketing` } };

export default function RoofWashingMarketingPage(){
 return <main>
  <ExteriorHero eyebrow="Roof washing marketing" title="Roof Washing and Roof Cleaning Lead Generation" description="A specialist page for roof washing and roof cleaning campaigns, built around higher-ticket homeowner intent, trust-building creative, service-area targeting and qualified enquiry generation." />
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><ProofStats /></div></section>
  <section className="py-16 md:py-20 bg-surface/70 border-y border-border"><div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12"><div><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Roof washing strategy</p><h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">Roof washing leads need stronger trust and better qualification.</h2><p className="text-muted leading-relaxed mt-6">Roof cleaning and roof washing often carry higher job value than a simple wash. The campaign needs proof, clear method language, property-owner targeting and lead questions that help separate serious enquiries from low-intent clicks.</p></div><div className="rounded-3xl border border-border bg-white p-7 shadow-sm"><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Related keywords</p><PillCloud items={["roof washing leads","roof cleaning ads","soft wash roof cleaning","black streak removal","roof algae cleaning","homeowner roof washing","roof wash Meta Ads"]}/></div></div></section>
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><CaseStudyCards /><div className="mt-12"><BlogCluster /></div></div></section><RelatedExteriorLinks current="/industries/roof-washing-marketing"/><ExteriorCta />
 </main>;
}

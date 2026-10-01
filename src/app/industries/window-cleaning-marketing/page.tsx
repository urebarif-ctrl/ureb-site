import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { ExteriorHero, ProofStats, CaseStudyCards, BlogCluster, RelatedExteriorLinks, ExteriorCta, PillCloud } from "@/components/exterior-cleaning-specialist";

export const metadata: Metadata = { title: "Window Cleaning Marketing Specialist | Meta Ads Lead Generation", description: "Window cleaning marketing and Meta Ads lead generation for local exterior cleaning companies. Campaigns built around qualified homeowner enquiries, CPL control and booked-job potential.", alternates: { canonical: `${SITE_URL}/industries/window-cleaning-marketing` } };

export default function WindowCleaningMarketingPage(){
 return <main>
  <ExteriorHero eyebrow="Window cleaning marketing" title="Window Cleaning Lead Generation Specialist" description="A dedicated page for window cleaning companies that need more qualified local leads through Meta Ads, service-area targeting, before-after creative, strong lead forms and fast follow-up systems." />
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><ProofStats /></div></section>
  <section className="py-16 md:py-20 bg-surface/70 border-y border-border"><div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12"><div><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Window cleaning strategy</p><h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">Clean glass is visual. The campaign should show the result fast.</h2><p className="text-muted leading-relaxed mt-6">Window cleaning campaigns perform best when the offer, service area and creative are clear. I focus on local homeowners, visible transformations, simple quote CTAs, lead forms with enough qualification and follow-up that moves quickly.</p></div><div className="rounded-3xl border border-border bg-white p-7 shadow-sm"><p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Related keywords</p><PillCloud items={["window cleaning leads","residential window cleaning","commercial window cleaning","pure water window cleaning","water fed pole cleaning","exterior window cleaning","local window cleaning ads"]}/></div></div></section>
  <section className="py-16 md:py-20 bg-white"><div className="max-w-6xl mx-auto px-6"><CaseStudyCards /><div className="mt-12"><BlogCluster /></div></div></section><RelatedExteriorLinks current="/industries/window-cleaning-marketing"/><ExteriorCta />
 </main>;
}

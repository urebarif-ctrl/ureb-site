import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { ExteriorHero, ProofStats, CaseStudyCards, BlogCluster, RelatedExteriorLinks, ExteriorCta, PillCloud } from "@/components/exterior-cleaning-specialist";
import { ExteriorCampaignProof } from "@/components/exterior-campaign-proof";

export const metadata: Metadata = {
  title: "Exterior Cleaning Marketing Specialist | Meta Ads Media Buyer",
  description: "Ureb Arif is a media buyer and growth specialist for exterior cleaning companies: roof washing, window cleaning, pressure washing, power washing, water heater cleaning, holiday lighting and home service lead generation.",
  alternates: { canonical: `${SITE_URL}/industries/exterior-cleaning` },
};

const systems = [
  ["Meta Ads lead generation", "Campaigns built around local service-area targeting, lead forms, creative testing, CPL control and qualified homeowner enquiries."],
  ["Offer and creative testing", "Before-after visuals, seasonal hooks, urgent service offers, quote-led CTAs and proof-driven ad angles."],
  ["Lead quality review", "Reporting that looks beyond form submissions and connects ads to useful enquiries, estimates and booked jobs where data is available."],
  ["Multi-account execution", "Agency-side experience managing many exterior cleaning accounts across different local markets and service mixes."],
];

export default function ExteriorCleaningIndustryPage() {
  return (
    <main>
      <ExteriorHero
        eyebrow="Exterior cleaning marketing specialist"
        title="Media Buyer and Growth Specialist for Exterior Cleaning Companies"
        description="I help exterior cleaning businesses generate qualified local leads through Meta Ads, Google Ads strategy, service-area campaigns and practical campaign optimization. This includes roof washing, window cleaning, pressure washing, power washing, soft washing, water heater cleaning, holiday lighting, solar cleaning and related home services."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ProofStats />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface/70 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Positioning</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">Exterior cleaning is a specialist market.</h2>
            <p className="text-muted leading-relaxed mt-6">The buyer journey for a window cleaning lead is different from a roof washing lead. Pressure washing and power washing depend on visible transformation. Holiday lighting is seasonal. Water heater cleaning and related maintenance services need intent-specific messaging. A generic home services campaign leaves too much performance on the table.</p>
            <p className="text-muted leading-relaxed mt-4">My approach is to build campaigns around the service, the service area, the real job value and the follow-up process instead of treating every local lead as the same.</p>
          </div>
          <div className="rounded-3xl bg-white border border-border p-7 shadow-sm">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Service keyword cluster</p>
            <PillCloud />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Growth system</p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">How I approach exterior cleaning lead generation.</h2>
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {systems.map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-border bg-surface p-7">
                <h3 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold">{title}</h3>
                <p className="text-muted leading-relaxed mt-4">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface/70 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Documented proof</p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl mb-10">Case studies that support the specialist positioning.</h2>
          <CaseStudyCards />
        </div>
      </section>

      <ExteriorCampaignProof />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Supporting content</p>
          <BlogCluster />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/services/exterior-cleaning-meta-ads" className="rounded-full bg-foreground text-white px-6 py-3 font-bold">Meta Ads for exterior cleaning</Link>
            <Link href="/contact" className="rounded-full border border-border px-6 py-3 font-bold">Talk about your account</Link>
          </div>
        </div>
      </section>
      <RelatedExteriorLinks current="/industries/exterior-cleaning" />
      <ExteriorCta />
    </main>
  );
}

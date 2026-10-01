import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "NorthCharge Meta Ads Case Study | EV Charger Growth Campaign",
  description:
    "A Meta Ads case study showing campaign proof for NorthCharge, including engagement-focused paid social work, campaign dashboard proof, and growth marketing execution by Ureb Arif.",
  alternates: { canonical: `${SITE_URL}/case-studies/northcharge-meta-ads` },
  openGraph: {
    title: "NorthCharge Meta Ads Case Study | Ureb Arif",
    description:
      "Documented Meta Ads campaign proof for an EV charger brand, including campaign dashboard visuals and growth marketing execution.",
    images: [{ url: "/images/northcharge-meta-ads.webp", width: 1200, height: 630 }],
  },
};

const metrics = [
  { label: "Post engagements shown", value: "31,372" },
  { label: "Cost per engagement shown", value: "$0.004" },
  { label: "Campaign type", value: "Meta Ads" },
  { label: "Role", value: "Growth Strategist" },
];

const steps = [
  {
    title: "Campaign proof first",
    desc: "The case study uses an actual campaign dashboard visual so the work is shown with proof instead of generic marketing claims.",
  },
  {
    title: "Paid social execution",
    desc: "The campaign focused on Meta Ads execution, engagement growth, campaign structure, budget monitoring, creative direction and reporting clarity.",
  },
  {
    title: "EV charger positioning",
    desc: "The messaging supports a technical service category where trust, education and clean campaign presentation matter for growth.",
  },
  {
    title: "Portfolio-ready presentation",
    desc: "The page turns the raw campaign proof into a clear public-facing case study for personal-brand positioning and sales conversations.",
  },
];

export default function NorthChargeMetaAdsCaseStudy() {
  return (
    <main>
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-hero">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <Link href="/case-studies" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1 mb-8">← Case studies</Link>
          <p className="text-accent font-bold text-xs uppercase tracking-widest mb-4">EV charger case study · Meta Ads</p>
          <h1 className="font-[family-name:var(--font-jakarta)] text-4xl md:text-[4.3rem] font-extrabold leading-[1.04] tracking-tight max-w-5xl">
            NorthCharge Meta Ads Campaign Proof
          </h1>
          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-3xl mt-7">
            A campaign-proof case study showing paid social execution, dashboard-backed performance and growth marketing presentation for an EV charger brand.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-border bg-surface shadow-xl">
            <Image
              src="/images/northcharge-meta-ads.webp"
              alt="NorthCharge Meta Ads campaign dashboard proof"
              width={1200}
              height={760}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="lg:col-span-2">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Campaign snapshot</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold tracking-tight">Documented campaign proof, not a generic portfolio card.</h2>
            <p className="text-muted leading-relaxed mt-5">
              This case study presents the actual campaign proof in a clean, client-facing format. It supports my positioning as a growth-focused media buyer who can turn campaign work into clear performance stories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface/70 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-light">{item.label}</p>
                <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold mt-3 text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Execution story</p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">How the work is positioned.</h2>
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-border bg-surface p-7">
                <span className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-accent/40">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold mt-4">{step.title}</h3>
                <p className="text-muted leading-relaxed mt-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Growth marketing proof</p>
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">Need campaign proof turned into growth?</h2>
          <p className="text-white/70 leading-relaxed mt-5 max-w-2xl mx-auto">
            I help brands build, optimize and present paid media campaigns with clear strategy, clean reporting and business-focused positioning.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/contact" className="rounded-full bg-white text-foreground px-7 py-3 font-bold">Discuss your campaign</Link>
            <Link href="/case-studies" className="rounded-full border border-white/20 px-7 py-3 font-bold text-white hover:bg-white/10">View more case studies</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
